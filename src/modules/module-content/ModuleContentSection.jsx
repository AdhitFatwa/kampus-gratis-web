import YouTube from "react-youtube";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Button } from "../../components/default/Button";
import { moduleContent } from "../../data/module-content";

export const ModuleContentSection = ({ dataParams }) => {
  const paramsModuleId = dataParams.moduleContentId;

  const dataModuleContents = moduleContent.find((item) => item.id === paramsModuleId);

  const idVideoGroup = useMemo(() => {
    return dataModuleContents?.module_moduleVideos.map((video) => {
      return {
        id: video?.id,
        title: video?.title,
        desc: video?.description,
        youtubeId: video?.url.match(
          /(?<=v=|v\/|vi\/|vi=|youtu\.be\/|\/v\/|\/embed\/|\/shorts\/|\/youtu.be\/|\/v=|\/e\/|\/u\/\w\/|\/embed\/|\/v\/|\/watch\?v=|youtube.com\/watch\?v=|youtu.be\/)([^#&?\n]*)/,
        )?.[0],
      };
    });
  }, [dataModuleContents]);

  const [isExecuted, setIsExecuted] = useState(false);
  const [videoItem, setVideoItem] = useState({
    id: "",
    title: "",
    desc: "",
    youtubeId: "",
  });

  useEffect(() => {
    if (!isExecuted && idVideoGroup) {
      setVideoItem({
        id: idVideoGroup?.[0]?.id,
        title: idVideoGroup?.[0]?.title,
        desc: idVideoGroup?.[0]?.desc,
        youtubeId: idVideoGroup?.[0]?.youtubeId,
      });
      setIsExecuted(true);
    }
  }, [idVideoGroup, isExecuted]);

  function handleSidebarVideosClicked(val) {
    setVideoItem(val);
  }

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "300",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Fragment>
      {dataModuleContents && (
        <div className="flex flex-col h-full w-full items-center px-4 lg:px-24 mb-10 max-w-[1440px] mx-auto">
          <h1 className="mx-auto lg:text-3xl text-lg font-bold my-10">
            {dataModuleContents?.title}
          </h1>
          <div className="flex lg:flex-row flex-col w-full h-full gap-8 lg:gap-16">
            <section className="flex w-full">
              <div className="flex flex-col w-full h-auto gap-4 justify-center items-center">
                <YouTube
                  videoId={videoItem.youtubeId}
                  opts={opts}
                  onReady={onPlayerReady}
                  iframeClassName="xl:w-[728px] md:w-[728px] xl:h-[398px] lg:h-[508px] w-[350px] h-[240px]"
                />
                <div className="shadow-lg rounded-lg p-5 lg:p-10 w-full h-full mt-3 md:mt-6 lg:mt-0">
                  <h1 className="font-bold text-xl">{videoItem?.title}</h1>
                  <div className="w-full border-t rounded-lg border-gray-300 my-4"></div>
                  <p className="text-gray-500">{videoItem?.desc}</p>
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full shadow-lg rounded-lg p-6">
              <section className="flex flex-col">
                <h1 className="font-bold text-xl">Video Lainnya</h1>
                <div className="flex flex-row lg:flex-col gap-y-4 pt-6 pb-4">
                  {idVideoGroup?.map((video, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleSidebarVideosClicked({
                          title: video.title,
                          id: video.id,
                          desc: video.desc,
                          youtubeId: video.youtubeId,
                        })
                      }
                      className="w-full flex justify-between items-center gap-4 lg:gap-0"
                    >
                      <div className="flex items-center gap-x-2">
                        <img src={"/images/module/button-play.svg"} alt="icon" />
                        <p className="font-semibold text-start text-sm md:text-lg lg:text-base">
                          {video.title}
                        </p>
                      </div>
                      {video?.id === videoItem?.id && (
                        <div className="bg-neutral-base md:py-2 md:px-3 py-1 px-2 rounded-lg">
                          <p className="text-white text-xs font-semibold">Sedang dibuka</p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
              <div className="w-full border-t rounded-lg border-gray-300 my-6"></div>
              <section className="flex flex-col">
                <h1 className="font-bold text-xl">Dokumen Lainnya</h1>
                <div className="flex flex-col gap-y-4 pt-6 pb-4">
                  {dataModuleContents.module_moduleDocuments.map((doc, i) => (
                    <Button
                      key={i}
                      type="button"
                      href={doc?.document_file}
                      className="flex items-center gap-x-2"
                    >
                      <img src={"/images/module/iconDoc.svg"} alt="icon" />
                      <p className="font-semibold text-start text-sm md:text-lg lg:text-base">
                        {doc?.title}
                      </p>
                    </Button>
                  ))}
                </div>
              </section>
              <div className="w-full border-t rounded-lg border-gray-300 my-6"></div>
              <div className="w-fit lg:mt-3 mb-5 ml-1">
                <div className="flex gap-2 items-center">
                  <img src={"/images/module/done-icon.svg"} alt="done-icon" />
                  <h3 className="font-semibold lg:text-lg md:text-base text-sm">
                    kamu bisa mengakses modul ini
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </Fragment>
  );
};

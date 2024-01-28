import { useState } from "react";
import { RxSlider } from "react-icons/rx";
import { certificate } from "../../data/certificate";
import { Card } from "../default/Card";
import { PopupModal } from "../default/PopupModal";

export const CertificateSection = () => {
  const dataCertif = certificate;
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("SEMUA");
  const [popupStatus, setPopupStatus] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <button
          className="w-[109px] h-[40px] rounded-[8px] text-center border-[3px] border-primary-500 relative"
          onClick={() => setOpen(open == true ? false : true)}
        >
          <div className="my-auto flex justify-center gap-[10px] items-center">
            <p className="text-primary-500 text-[14px]">Filter</p>
            <RxSlider className="text-primary-500" />
          </div>
          {open && (
            <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-32 ease-in-out ">
              <div className="w-[160px] h-[114px] rounded-[8px] text-center overflow-hidden shadow-2xl ">
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter("SEMUA")}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == "SEMUA" ? "bg-blue-100" : "bg-white"
                    } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">Semua</p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter("SUBJECT")}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == "SUBJECT" ? "bg-blue-100" : "bg-white"
                    } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">Mata Kuliah</p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter("EVENT")}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == "EVENT" ? "bg-blue-100" : "bg-white"
                    } absolute left-0 overflow-hidden`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">Webinar</p>
                </button>
              </div>
            </div>
          )}
        </button>
      </div>

      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[36px] relative mt-4 mx-auto"
        }
      >
        {filter === "SEMUA" ? (
          Array.isArray(dataCertif) && dataCertif.length !== 0 ? (
            dataCertif?.map((item) => {
              return (
                <div className="lg:col-span-4 w-full h-full" key={item?.id}>
                  <Card
                    hasImage={true}
                    src={item?.thumbnail_link}
                    imgwidth={100}
                    imgheight={100}
                    className={"container mx-auto w-full h-full rounded-[8px] p-[12px] bg-white"}
                    onClick={() => setPopupStatus(true)}
                    download
                  >
                    {/* <div className="w-full mt-[12px]">
                      <h1 className="text-center text-neutral-900 text-[18px] font-[500]">
                        {item?.subject_certificate?.name}
                      </h1>
                      <p className="text-center text-neutral-base text-[16px] font-[500]">
                        {item?.type === "EVENT"
                          ? "Webinar"
                          : item?.type === "SUBJECT"
                          ? "Mata Kuliah"
                          : ""}
                      </p>
                    </div> */}
                  </Card>
                  <div className="w-[1000px]">
                    <PopupModal
                      lookup={popupStatus}
                      image={item?.thumbnail_link}
                      hasImg
                      onClose={() => setPopupStatus(false)}
                      className={"!py-2"}
                    >
                      <div className="flex md:flex-row flex-col md:gap-3 gap-0 items-center justify-center">
                        <a href={item?.link} download>
                          <button className="w-[230px] h-[56px] bg-primary-500 rounded-[8px] text-white mb-3 md:mb-0">
                            <div className=" flex justify-center gap-3">
                              <div>
                                <img src="/icons/ic-download.svg" alt={"download-icon"} />
                              </div>
                              <div>Unduh</div>
                            </div>
                          </button>
                        </a>
                        <button
                          className="w-[230px] h-[56px] border-primary-500 border-2 rounded-[8px] text-primary-500 "
                          onClick={() => setPopupStatus(false)}
                        >
                          Kembali
                        </button>
                      </div>
                    </PopupModal>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="md:col-span-12 grid place-content-center  ">
              <img src="/icons/ic-data-null.svg" alt="image-null" />
              <p className="text-center text-neutral-900 text-[18px] font-[500]">
                Kamu belum mempunyai sertifikat
              </p>
            </div>
          )
        ) : dataCertif?.filter((x) => x?.type.includes(filter)).length === 0 ||
          dataCertif?.filter((x) => x?.type.includes(filter)) === undefined ? (
          <div className=" md:col-span-12 grid place-content-center  ">
            <img src="/icons/ic-data-null.svg" alt="image-null" />
            {filter === "SUBJECT" ? (
              <p className="text-center text-neutral-900 text-[18px] font-[500]">
                Belum ada matakuliah yang selesai
              </p>
            ) : (
              <p className="text-center text-neutral-900 text-[18px] font-[500]">
                Kamu belum mengikuti webinar
              </p>
            )}
          </div>
        ) : (
          dataCertif
            ?.filter((item) => item?.type.includes(filter))
            .map((item) => {
              return (
                <div className="lg:col-span-4 w-full h-full mb-10 lg:mb-0 " key={item.id}>
                  <Card
                    hasImage={true}
                    src={item?.thumbnail_link}
                    imgwidth={100}
                    imgheight={100}
                    className={"container mx-auto w-full h-full rounded-[8px] p-[12px] bg-white"}
                    onClick={() => setPopupStatus(true)}
                  >
                    <div className="w-full mt-[12px]">
                      <h1 className="text-center text-neutral-900 text-[18px] font-[500]">
                        {item?.subject_certificate?.name}
                      </h1>
                      <p className="text-center text-neutral-base text-[16px] font-[500]">
                        {item?.type === "EVENT"
                          ? "Webinar"
                          : item?.type === "SUBJECT"
                          ? "Mata Kuliah"
                          : ""}
                      </p>
                    </div>
                  </Card>
                  <div className="w-[1000px]">
                    <PopupModal
                      lookup={popupStatus}
                      image={item?.thumbnail_link}
                      hasImg
                      onClose={() => setPopupStatus(false)}
                      className={"!py-2"}
                    >
                      <div className="flex md:flex-row flex-col md:gap-3 gap-0 items-center ">
                        <a href={item?.link} download>
                          <button className="w-[230px] h-[56px] bg-primary-500 rounded-[8px] text-white mb-3 md:mb-0">
                            <div className=" flex justify-center gap-3">
                              <div>
                                <img src="/icons/ic-download.svg" alt={"download-icon"} />
                              </div>

                              <div>Unduh</div>
                            </div>
                          </button>
                        </a>

                        <button
                          className="w-[230px] h-[56px] border-primary-500 border-2 rounded-[8px] text-primary-500 "
                          onClick={() => setPopupStatus(false)}
                        >
                          Kembali
                        </button>
                      </div>
                    </PopupModal>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

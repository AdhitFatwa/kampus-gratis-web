import { Link } from "react-router-dom";
import { Button } from "../default/Button";

export const GlimpseKnowledgeCard = ({ data }) => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg min-h-[400px] h-full bg-white justify-between">
      <div className="w-full h-full  group">
        <div className="p-4">
          <div className="w-full relative">
            <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>

            <img
              src={data?.thumbnail}
              alt={"image-article"}
              width={282}
              height={208}
              loading={"eager"}
              className="w-full h-auto rounded-md"
            />

            <div className="absolute inset-0 flex items-center justify-center w-full h-full mx-auto bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                to={"#"}
                className="bg-[#FAB317] rounded-md flex items-center justify-center px-6 py-2 text-white font-semibold"
              >
                Lihat
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-[10px] px-4">
          <div className="flex justify-between w-full">
            <div className="flex space-x-2">
              {data?.tags?.slice(0, 1).map((item) => (
                <p key={item} className="text-[12px] bg-[#E3FBDA] font-semibold px-3 rounded-md">
                  #{" "}
                  {item.toString().length > 15
                    ? item.toString().substring(0, 15) + "..."
                    : item.toString()}
                </p>
              ))}
            </div>
            {/* <p className="text-[12px] text-neutral-500">{newDay}</p> */}
          </div>
          <div>
            <h1 className="text-black font-bold text-[18px] overflow-hidden mt-2">
              {data.title.length > 50 ? data.title.substring(0, 50) + "..." : data.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 pt-4 pb-6">
        <p className="flex text-[12px] text-neutral-500 justify-end items-end">
          {data?.views} views
        </p>

        <Button type="button" className="bg-gray-100 p-2 rounded-md" onClick={() => {}}>
          <img
            src="/icons/article-unsave.svg"
            alt={"icon-favorite"}
            width={30}
            height={30}
            loading={"lazy"}
            className="w-auto h-auto"
          />
        </Button>
      </div>
    </section>
  );
};

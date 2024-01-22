import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { dashboard } from "../../data/dashboard";
import { Link } from "react-router-dom";

export const ArticleSection = () => {
  const articles = dashboard?.articles;

  function changeFormatByTime(iso) {
    const date = new Date(iso);
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = String(date.getFullYear());
    return `${month} ${year}`;
  }

  return (
    <>
      <div className=" w-full  ">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Sekilas Ilmu</h1>
          <Link className="text-sm text-primary-500 font-semibold" to={"#"}>
            Lihat Detail
          </Link>
        </div>
        <Swiper slidesPerView={1} modules={[Pagination]}>
          {articles?.map((article, i) => (
            <SwiperSlide key={i}>
              <Link to={"#"} key={i} className="flex flex-col shadow-md">
                <div className="block w-full h-[200px] rounded-lg bg-neutral-100">
                  <img
                    width={340}
                    height={200}
                    src={article?.thumbnail}
                    className="w-full h-full object-cover rounded-t-lg"
                    alt="article-thumbnail"
                  />
                </div>
                <div className="bg-white text-start w-full px-7 py-4 mb-10 rounded-lg">
                  <h1 className="font-bold text-black dark:text-yellow-500">{article?.title}</h1>
                  <p className="flex flex-row items-center gap-x-2 font-normal text-[12px] text-neutral-base">
                    <span className="">Artikel</span>
                    <svg
                      width="3"
                      height="2"
                      viewBox="0 0 3 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="1.5" cy="1" r="1" fill="#A3A3A3" />
                    </svg>
                    {article?.tags?.map((tag, i) => (
                      <span key={i} className="">
                        {tag}
                      </span>
                    ))}
                  </p>
                  <p className="font-normal text-end text-[12px] text-[#A3A3A3]">
                    {changeFormatByTime(article?.created_at)}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

import { Pagination } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";
import { dashboard } from "../../data/dashboard";

export const TaskSection = () => {
  const assignments = dashboard?.assignments;

  function changeFormatToDate(iso) {
    const date = new Date(iso);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  }

  function limitString(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength - 3) + "...";
    }
  }

  return (
    <>
      {assignments !== null && assignments && assignments?.length > 0 ? (
        <div className="bg-white p-7 rounded-md shadow-sm w-full overflow-hidden col-span-2">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper relative dashboard">
            {assignments?.map((assignment, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="">
                  <section className="text-neutral-900 mb-4 flex flex-col w-full">
                    <h1 className="text-lg font-bold w-fit">Penugasan</h1>
                    <p className="text-sm text-neutral-500 w-fit">{assignment?.progress_type}</p>
                  </section>
                  <section className="flex gap-4 mb-4 h-fit">
                    <div className="min-w-[90px] h-[110px]">
                      <img
                        src="/images/dashboard/dummytask.png"
                        width={90}
                        height={110}
                        className="h-full w-full object-cover rounded-lg"
                        alt="assignment-thumbnail"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="mb-2 text-start ">{assignment?.assignment_title}</h1>
                      <section className="flex gap-2 items-start lg:items-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                          <MdNavigateNext className="text-primary-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400 ">
                          {limitString(assignment?.assignment_desc, 40)}
                        </p>
                      </section>
                      <section className="flex gap-2 items-start lg:items-centers">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                          <MdNavigateNext className="text-primary-500" />
                        </div>
                        <p className="text-xs lg:text-sm text-neutral-400">Teacher Name</p>
                      </section>
                    </div>
                  </section>

                  <div
                    style={{ color: "red" }}
                    className="text-red-500 flex items-center text-xs lg:text-sm w-52"
                  >
                    <AiFillWarning className="text-lg mr-2" />
                    <h1 className="text-sm">
                      Terakhir {changeFormatToDate(assignment?.progress_deadline)}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <section className="bg-primary-500/10 flex items-center justify-center dark:bg-[#1B1E21] p-7 rounded-md shadow-sm w-full">
          <div className="flex flex-col items-center">
            <img width={200} height={190} src={"/icons/emptyTask.svg"} alt="emptyTask" />
            <h1 className="text-sm text-neutral-800 dark:text-white/80 font-medium -mt-5">
              Belum ada penugasan
            </h1>
          </div>
        </section>
      )}
    </>
  );
};

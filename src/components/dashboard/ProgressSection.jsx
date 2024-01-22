import { RxDividerVertical } from "react-icons/rx";
import { dashboard } from "../../data/dashboard";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ProgressSection = () => {
  const subjectProgress = dashboard?.subject_progress;
  const [more, setMore] = useState(false);
  let lengthData = 0;

  if (subjectProgress && more) {
    lengthData = subjectProgress?.dataSubjects?.length;
  }
  if (subjectProgress && !more) {
    lengthData = 3;
  }
  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <section className="bg-white w-full pt-[28px] px-[24px] rounded-md pb-[44px] mb-[48px]">
      {subjectProgress && subjectProgress?.dataSubjects?.length > 0 ? (
        <>
          <p className="font-semibold text-xl text-neutral-900 mb-[8px] ">
            Lanjutkan Mata Kuliah Kamu
          </p>
          <p className="text-sm font-normal text-neutral-900">Semester 1</p>
          <div className="wrapper mt-5 grid gap-y-[20px] mb-[20px]">
            {subjectProgress?.dataSubjects?.slice(0, lengthData)?.map((subject, i) => {
              return (
                <div
                  key={i}
                  className="progressBox bg-white w-full relative flex gap-x-4 gap-y-[20px] rounded-lg p-5 border-[#F5F5F5] border-[1px] border-solid"
                >
                  <img
                    className="rounded-lg w-[100px] h-[100px] object-cover"
                    src={subject?.thumbnail || "/images/dashboard/dummyCourse.png"}
                    width={100}
                    height={100}
                    alt="tes"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                    <div>
                      <p className="text-base font-semibold mb-[12px]">{subject?.name}</p>
                      <div className="flex items-center gap-x-2 text-neutral-500 text-sm font-normal mb-[17px]">
                        <p>Semester {subject?.subject_semester}</p>
                        <RxDividerVertical className="scale-y-125" />
                        <p>{subject?.subject_code}</p>
                      </div>
                      <div className="flex justify-between lg:justify-normal lg:grid lg:grid-cols-8 gap-x-2 items-center mb-3">
                        <progress
                          className={`progress col-span-5 h-[10px] rounded-lg overflow-hidden`}
                          max="100"
                          value={`${subject?.progress_percentage}`}
                        />
                        <p className="col-span-1 text-[14px] text-neutral-500 font-normal inline mt-0 leading-none">
                          {subject?.current_session}/{subject?.session_count}
                          <span className="ml-1 text-[12px]">Pertemuan</span>
                        </p>
                      </div>
                    </div>
                    {subject?.progress_percentage < 100 ? (
                      <Link
                        to={`/studi-ku/${subject.name}/${subject.id}`}
                        className="bg-primary-500 w-fit h-fit text-white text-sm font-medium px-5 py-2 hover:bg-primary-600 transition-colors ease-in-out duration-300 rounded-md justify-self-end"
                      >
                        Lanjut Belajar
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="bg-neutral-300 w-fit h-fit text-white text-sm font-medium px-5 py-2 rounded-md justify-self-end"
                      >
                        Selesai
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            {subjectProgress?.dataSubjects?.length > 3 && (
              <button onClick={handleMore}>
                <p className="text-center text-[12px] text-neutral-500 font-normal mb-[16px]">
                  {more ? "Lihat Lebih Sedikit" : "Lihat Semua"}
                </p>
                <img
                  className={`mx-auto ${more && "rotate-180"}`}
                  src={"/icons/LihatSemua.svg"}
                  alt="Lihat Semua"
                />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="h-[calc(70vh-250px)] w-full flex items-center justify-center flex-col gap-8">
          <img src="/images/dashboard/emptyMatkul.svg" width={280} height={280} alt="Empty" />
          <p className="text-lg">Kamu belum mengambil mata kuliah</p>
          <Link
            to={"#"}
            className="bg-primary-500 text-white w-[280px] text-center py-2 rounded-md"
          >
            Ambil Sekarang
          </Link>
        </div>
      )}
    </section>
  );
};

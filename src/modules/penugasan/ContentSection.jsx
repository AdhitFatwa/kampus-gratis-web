import { Link, useNavigate, useParams } from "react-router-dom";
import { penugasan } from "../../data/penugasan";
import AssignedAssesment from "/images/penugasan/assigned-assesment.svg";
import AssigmentAssigned from "/images/penugasan/assigned-assigment.svg";
import AssigmentDone from "/images/penugasan/assigned-done.svg";
import AssignedLate from "/images/penugasan/assigned-late.svg";
import { PenugasanCard } from "../../components/penugasan/PenugasanCard";
import { Suspense, useEffect, useState } from "react";

export const ContentSection = () => {
  const getAssigment = penugasan;

  const { tab } = useParams();
  const router = useNavigate();

  const [active, setactive] = useState("semua-tugas");

  useEffect(() => {
    if (tab === "semua-tugas" || tab === null) {
      setactive("semua-tugas");
    } else if (tab === "ditugaskan") {
      setactive("ONGOING");
    } else if (tab === "terlambat") {
      setactive("LATE");
    } else if (tab === "sedang-dinilai") {
      setactive("GRADING");
    } else if (tab === "selesai") {
      setactive("FINISHED");
    }
  }, [tab, router, active]);

  return (
    <Suspense>
      <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen max-w-[1440px] mx-auto">
        <div className="bg-white h-full rounded-[8px]">
          <div className="mb-5 lg:mb-8 text-[20px] font-semibold text-[#262626] border-b border-gray-200 hover:text-[#000]">
            <ul className="p-2 flex flex-wrap gap-5 justify-center items-center">
              <li className="mr-2">
                <Link
                  to={"/penugasan/?tab=semua-tugas"}
                  className={`inline-block p-4 ${
                    tab === "semua-tugas" || tab === null
                      ? "text-[#0B568D] border-[#0B568D] border-b-2"
                      : ""
                  }     rounded-t-lg active hover:border-gray-300   `}
                  aria-current="page"
                  onClick={() => setactive("semua-tugas")}
                >
                  Semua Tugas
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to={"/penugasan/?tab=ditugaskan"}
                  className={`inline-block p-4 ${
                    tab === "ditugaskan" ? "text-[#0B568D] border-[#0B568D] border-b-2" : ""
                  }     rounded-t-lg active hover:border-gray-300  `}
                  aria-current="page"
                  onClick={() => setactive("ONGOING")}
                >
                  Ditugaskan
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to={"/penugasan/?tab=terlambat"}
                  className={`inline-block p-4 ${
                    tab === "terlambat" ? "text-[#0B568D] border-[#0B568D]" : ""
                  }     rounded-t-lg active hover:border-gray-300  `}
                  aria-current="page"
                  onClick={() => setactive("LATE")}
                >
                  Terlambat
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to={"/penugasan/?tab=sedang-dinilai"}
                  className={`inline-block p-4 ${
                    tab === "sedang-dinilai" ? "text-[#0B568D] border-[#0B568D]" : ""
                  }     rounded-t-lg active hover:border-gray-300 `}
                  aria-current="page"
                  onClick={() => setactive("GRADING")}
                >
                  Sedang Dinilai
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to={"/penugasan/?tab=selesai"}
                  className={`inline-block p-4 ${
                    tab === "selesai" ? "text-[#0B568D] border-[#0B568D]" : ""
                  }     rounded-t-lg active hover:border-gray-300`}
                  aria-current="page"
                  onClick={() => setactive("FINISHED")}
                >
                  Selesai
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-8">
            {active === "semua-tugas" ? (
              getAssigment?.map((item) => (
                <PenugasanCard
                  key={item.assignment_id}
                  titleAssigment={item.assignment_title}
                  category={
                    item.progress_status === "ONGOING"
                      ? "Ditugaskan"
                      : item.progress_status === "LATE"
                      ? "Terlambat"
                      : item.progress_status === "FINISHED"
                      ? "Selesai"
                      : item.progress_status === "GRADING"
                      ? "Sedang Dinilai"
                      : ""
                  }
                  titleCourse={item.subject_name}
                  courseId={item.subject_id}
                  assignmentId={item.assignment_session_id}
                  date={item.progress_deadline}
                  time={item.progress_deadline}
                  bgLine={
                    item.progress_status === "ONGOING"
                      ? "bg-[#0B568D]"
                      : item.progress_status === "LATE"
                      ? "bg-[#D79210]"
                      : item.progress_status === "FINISHED"
                      ? "bg-[#2D9A41]"
                      : item.progress_status === "GRADING"
                      ? "bg-[#737373]"
                      : ""
                  }
                  classNameCategory={
                    item.progress_status === "ONGOING"
                      ? "text-[#0B568D]"
                      : item.progress_status === "LATE"
                      ? "text-[#D79210]"
                      : item.progress_status === "FINISHED"
                      ? "text-[#2D9A41]"
                      : item.progress_status === "GRADING"
                      ? "text-[#737373]"
                      : ""
                  }
                  imgAssigment={
                    item.progress_status === "ONGOING"
                      ? AssigmentAssigned
                      : item.progress_status === "LATE"
                      ? AssignedLate
                      : item.progress_status === "FINISHED"
                      ? AssigmentDone
                      : item.progress_status === "GRADING"
                      ? AssignedAssesment
                      : ""
                  }
                />
              ))
            ) : getAssigment?.filter((item) => item.progress_status.includes(active)).length == 0 ||
              undefined ||
              null ? (
              <div className="flex justify-center">
                <img src="/images/penugasan/data-null.svg" alt={"empty"} width={250} height={150} />
              </div>
            ) : (
              getAssigment
                ?.filter((item) => item.progress_status.includes(active))
                .map((item) => (
                  <PenugasanCard
                    key={item.assignment_id}
                    courseId={item.subject_id}
                    assignmentId={item.assignment_session_id}
                    titleAssigment={item.assignment_title}
                    category={
                      item.progress_status === "ONGOING"
                        ? "Ditugaskan"
                        : item.progress_status === "LATE"
                        ? "Terlambat"
                        : item.progress_status === "FINISHED"
                        ? "Selesai"
                        : item.progress_status === "GRADING"
                        ? "Sedang Dinilai"
                        : ""
                    }
                    titleCourse={item.subject_name}
                    date={item.progress_deadline}
                    time={item.progress_deadline}
                    bgLine={
                      item.progress_status === "ONGOING"
                        ? "bg-[#0B568D]"
                        : item.progress_status === "LATE"
                        ? "bg-[#D79210]"
                        : item.progress_status === "FINISHED"
                        ? "bg-[#2D9A41]"
                        : item.progress_status === "GRADING"
                        ? "bg-[#737373]"
                        : ""
                    }
                    classNameCategory={
                      item.progress_status === "ONGOING"
                        ? "text-[#0B568D]"
                        : item.progress_status === "LATE"
                        ? "text-[#D79210]"
                        : item.progress_status === "FINISHED"
                        ? "text-[#2D9A41]"
                        : item.progress_status === "GRADING"
                        ? "text-[#737373]"
                        : ""
                    }
                    imgAssigment={
                      item.progress_status === "ONGOING"
                        ? AssigmentAssigned
                        : item.progress_status === "LATE"
                        ? AssignedLate
                        : item.progress_status === "FINISHED"
                        ? AssigmentDone
                        : item.progress_status === "GRADING"
                        ? AssignedAssesment
                        : ""
                    }
                  />
                ))
            )}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

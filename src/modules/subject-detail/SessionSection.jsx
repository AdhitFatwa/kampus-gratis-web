import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const SessionSection = ({ session, index }) => {
  const [isOpen, setIsOpen] = useState("");
  const { pathname } = useLocation();

  function isProgressFinished(status) {
    return session.progress.some((progress) => progress.type === status);
  }

  return (
    <div key={index} className="flex flex-col">
      <button
        onClick={() =>
          isOpen == "" ? setIsOpen(`Accordion-${session.session_no}`) : setIsOpen("")
        }
        disabled={session.is_locked}
        className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer ${
          !session.is_locked ? "bg-primary-500 hover:opacity-80" : "bg-neutral-500 cursor-auto"
        }`}
      >
        <p className="text-lg font-medium">Pertemuan {session.session_no}</p>
        {!session.is_locked ? (
          <MdArrowDropDown className={`text-3xl relative ${isOpen ? "rotate-180" : ""}`} />
        ) : (
          <img
            src={"/images/subject-detail/lock-icon.svg"}
            alt=""
            className={`relative ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {isOpen === `Accordion-${session.session_no}` ? (
        <div className="w-[94%] mx-auto">
          <div className="h-[60px] items-center flex justify-between border-b border-neutral-300 pl-[21px] pr-[40.5px]">
            <div className="flex gap-x-6">
              <img src={"/images/subject-detail/module-icon.svg"} alt="module" />
              <Link
                to={`${pathname}/modul-${index + 1}/${session.id}`}
                className="text-base text-neutral-800 hover:underline"
              >
                Modul
              </Link>
            </div>
            <div>
              {isProgressFinished("MODULE") && (
                <img src={"/images/subject-detail/done-icon.svg"} alt="done" />
              )}
            </div>
          </div>
          <div className="h-[60px] items-center flex justify-between border-b border-neutral-300 pl-[21px] pr-[40.5px]">
            <div className="flex gap-x-6">
              <img src={"/images/subject-detail/assignment-icon.svg"} alt="assignment" />
              <Link
                to={`${pathname}/tugas/${session.id}`}
                className="text-base text-neutral-800 hover:underline"
              >
                Tugas
              </Link>
            </div>
            <div>
              {isProgressFinished("ASSIGNMENT") && (
                <img src={"/images/subject-detail/done-icon.svg"} alt="done" />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

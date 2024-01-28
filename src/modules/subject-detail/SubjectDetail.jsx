import { subject } from "../../data/subject";
import { SessionSection } from "./SessionSection";

export const SubjectDetailsModule = ({ subjectId }) => {
  const data = subject.filter((subject) => subject.dataSubject.id === subjectId)[0];

  const dataSubjectDetails = data.dataSubject;
  const dataSessions = data.dataSessions;

  const thumbnailImg = dataSubjectDetails?.thumbnail.includes(".")
    ? dataSubjectDetails.thumbnail
    : "";

  return (
    <div className="mx-auto px-[7%] my-8 flex flex-col gap-y-10 max-w-[1440px] w-full">
      <div className="flex flex-col gap-y-[30px] items-center">
        <h3 className="text-black text-[28px] text-center font-bold">{dataSubjectDetails?.name}</h3>
        {/* <div className="w-full h-[253px]">
          <img
            src={thumbnailImg || "/icons/orang-bingung.svg"}
            alt={`${dataSubjectDetails?.name}-image`}
            width={1170}
            height={250}
            className="h-full object-cover rounded-lg mx-auto"
          />
        </div>
        <p className="text-lg font-normal text-neutral-800 text-justify">
          {dataSubjectDetails?.description
            ? dataSubjectDetails?.description
            : "Tidak ada deskripsi"}
        </p> */}
      </div>

      <div className="flex flex-col gap-[25px] select-none">
        {dataSessions?.map((session, index) => (
          <SessionSection key={index} index={index} session={session} />
        ))}
      </div>
    </div>
  );
};

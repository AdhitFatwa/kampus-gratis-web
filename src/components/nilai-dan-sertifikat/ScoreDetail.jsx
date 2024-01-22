import { MdChevronLeft } from "react-icons/md";
import { nilai } from "../../data/nilai";
import { ScoreDetailTable } from "./ScoreDetailTable";

export const ScoreDetail = ({ setDetailStatus }) => {
  const data = nilai;

  return (
    <div className="mb-10">
      <button
        onClick={() => {
          setDetailStatus(false);
        }}
        className="flex justify-start gap-2 items-center text-primary-600"
      >
        <MdChevronLeft />
        Kembali
      </button>
      {data?.semestrial_report?.semestrial_grades?.map((score, i) => (
        <div key={i} className="my-6">
          <section className="flex gap-x-2 items-center mb-4">
            <div className="h-2 w-2 rounded bg-yellow-500"></div>
            <h1>Semester {score.semester}</h1>
          </section>
          <ScoreDetailTable detailScore={score.subjects} />
        </div>
      ))}
    </div>
  );
};

import { ContentLayouts } from "../../components/nilai-dan-sertifikat/ContentLayout";
import { SummaryChart } from "../../components/nilai-dan-sertifikat/SummaryChart";
import { SummaryTable } from "../../components/nilai-dan-sertifikat/SummaryTable";
import { ScoreDetail } from "../../components/nilai-dan-sertifikat/ScoreDetail";

const ScoreSection = ({ detailStatus, setDetailStatus }) => {
  return (
    <>
      <ContentLayouts
        withGrid={!detailStatus ? true : false}
        className={` ${
          !detailStatus ? "grid-cols-1 lg:grid-cols-2 justify-center gap-6" : ""
        }  w-full `}
      >
        {!detailStatus ? (
          <>
            <SummaryChart />
            <SummaryTable setDetailStatus={setDetailStatus} />
          </>
        ) : (
          <ScoreDetail setDetailStatus={setDetailStatus} />
        )}
      </ContentLayouts>
    </>
  );
};

export default ScoreSection;

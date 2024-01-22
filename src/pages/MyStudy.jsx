import { mystudy } from "../data/mystudy";
import { BaseLayout } from "../modules/layout/BaseLayout";
import { MajorSection } from "../modules/mystudy/MajorSection";
import { SubjectSection } from "../modules/mystudy/SubjectSection";

const MyStudy = () => {
  const dataMajorProps = mystudy.dataMajor;
  const dataSubjectProps = mystudy.dataSubjects;

  return (
    <>
      <BaseLayout title="Studi Ku" />
      <div className="mx-auto px-5 lg:px-16 w-full max-w-[1440px]">
        {dataMajorProps ? (
          <div className="flex flex-col gap-7 mt-5">
            <MajorSection {...dataMajorProps} />
            <SubjectSection dataSubjectProps={dataSubjectProps} />
          </div>
        ) : (
          <div className="w-fit m-auto">
            <img src={"/images/mystudy/orang-bingung.svg"} alt="simulasi-null" />
            <h1 className="text-xl font-bold text-center">Tidak Ada Data Mata Kuliah</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MyStudy;

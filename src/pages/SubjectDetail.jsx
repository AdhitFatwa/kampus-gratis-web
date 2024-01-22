import { useParams } from "react-router-dom";
import { BaseLayout } from "../modules/layout/BaseLayout";
import { BreadCrumb } from "../components/default/BreadCrumb";
import { SubjectDetailsModule } from "../modules/subject-detail/SubjectDetail";

const SubjectDetail = () => {
  const { subjectName, subjectId } = useParams();

  const studyBreadcrumb = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Studi-ku",
      link: "/studi-ku",
    },
    {
      name: decodeURIComponent(subjectName.replace(/\+/g, " ")),
      link: `/studi-ku/${subjectName}/${subjectId}`,
    },
  ];

  return (
    <>
      <BaseLayout title="Studi Ku" />
      <BreadCrumb items={studyBreadcrumb} bgColor="bg-white" />
      <SubjectDetailsModule subjectId={subjectId} />
    </>
  );
};

export default SubjectDetail;

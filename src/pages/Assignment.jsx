import { useParams } from "react-router-dom";
import { BaseLayout } from "../modules/layout/BaseLayout";
import { BreadCrumb } from "../components/default/BreadCrumb";
import { AssignmentSection } from "../modules/assignment/AssignmentSection";

const Assignment = () => {
  const { subjectName, subjectId } = useParams();
  const studyAssigmentBreadcrumb = [
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
    {
      name: "Tugas",
      link: `/studi-ku/${subjectName}/${subjectId}/tugas`,
    },
  ];
  return (
    <>
      <BaseLayout title="Tugas" />
      <BreadCrumb items={studyAssigmentBreadcrumb} bgColor="bg-neutral-50" />
      <AssignmentSection />
    </>
  );
};

export default Assignment;

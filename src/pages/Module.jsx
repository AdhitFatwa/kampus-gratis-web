import { useParams } from "react-router-dom";
import { BaseLayout } from "../modules/layout/BaseLayout";
import { BreadCrumb } from "../components/default/BreadCrumb";
import { ModuleSection } from "../modules/module/ModuleSection";

const Module = () => {
  const { module, sessionId, subjectName, subjectId } = useParams();

  const dataParams = { module, sessionId, subjectName };

  const myStudyModuleBreadcrumb = [
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
      name: `${module
        .split("-")
        .join(" ")
        .replace(/^\w/, (c) => c.toUpperCase())}`,
      link: `/studi-ku/${subjectName}/${subjectId}/${module}/${sessionId}`,
    },
  ];
  return (
    <>
      <BaseLayout title="Studi-ku" />
      <BreadCrumb items={myStudyModuleBreadcrumb} bgColor="bg-white" />
      <ModuleSection dataParams={dataParams} />
    </>
  );
};

export default Module;

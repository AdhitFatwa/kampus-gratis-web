import { useParams } from "react-router-dom";
import { BaseLayout } from "../modules/layout/BaseLayout";
import { BreadCrumb } from "../components/default/BreadCrumb";
import { ModuleContentSection } from "../modules/module-content/ModuleContentSection";

const ModuleContent = () => {
  const { content, moduleContentId, subjectName, module, sessionId, subjectId } = useParams();

  const dataParams = { content, moduleContentId };

  const moduleContentBreadcrumb = [
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
    {
      name: decodeURIComponent(content.replace(/\+/g, " ")),
      link: `/studi-ku/${subjectName}/${subjectId}/${module}/${sessionId}/${content}/${moduleContentId}`,
    },
  ];
  return (
    <>
      <BaseLayout title="Studi-ku" />
      <BreadCrumb items={moduleContentBreadcrumb} bgColor="bg-white" />
      <ModuleContentSection dataParams={dataParams} />;
    </>
  );
};

export default ModuleContent;

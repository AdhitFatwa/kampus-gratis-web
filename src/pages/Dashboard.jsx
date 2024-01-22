import { ContentSection } from "../modules/dashboard/ContentSection";
import { SideBarSection } from "../modules/dashboard/SidebarSection";
import { BaseLayout } from "../modules/layout/BaseLayout";

const Dashboard = () => {
  return (
    <>
      <BaseLayout title="Dashboard" />
      <main className="py-2 px-6 md:px-14 lg:px-16 bg-neutral-50 min-h-[220vh] w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3 gap-x-10 ">
            <SideBarSection />
            <ContentSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

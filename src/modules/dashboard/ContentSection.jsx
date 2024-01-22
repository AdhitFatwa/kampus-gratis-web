import { EventSection } from "../../components/dashboard/EventSection";
import { ProgressSection } from "../../components/dashboard/ProgressSection";
import { TaskSection } from "../../components/dashboard/TaskSection";

export const ContentSection = () => {
  return (
    <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
      <div className="flex gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6">
        <TaskSection />
        <EventSection />
      </div>
      <ProgressSection />
    </div>
  );
};

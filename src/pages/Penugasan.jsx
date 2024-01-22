import { BaseLayout } from "../modules/layout/BaseLayout";
import { BannerSection } from "../modules/penugasan/BannerSection";
import { ContentSection } from "../modules/penugasan/ContentSection";

const Penugasan = () => {
  return (
    <>
      <BaseLayout title="Penugasan" />
      <section className="bg-neutral-50 pt-2">
        <BannerSection />
        <ContentSection />
      </section>
    </>
  );
};

export default Penugasan;

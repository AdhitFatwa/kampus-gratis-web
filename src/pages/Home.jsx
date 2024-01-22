import AdvantageSection from "../modules/home/AdvantageSection";
import ArticleSection from "../modules/home/ArticleSection";
import BannerSection from "../modules/home/BannerSection";
import FacultySection from "../modules/home/FacultySection";
import FeatureSection from "../modules/home/FeatureSection";
import GlimpseSection from "../modules/home/GlimpseSection";
import HeroSection from "../modules/home/HeroSection";
import InvitationSection from "../modules/home/InvitationSection";
import PartnerSection from "../modules/home/PartnerSection";
import ProgramSection from "../modules/home/ProgramSection";
import TestimonySection from "../modules/home/TestimonySection";
import LayoutFooter from "../modules/home/LayoutFooter";
import { BaseLayout } from "../modules/layout/BaseLayout";

export const Home = () => {
  return (
    <>
      <BaseLayout />
      <HeroSection />
      <FeatureSection />
      <ProgramSection />
      <BannerSection />
      <PartnerSection />
      <GlimpseSection />
      <AdvantageSection />
      <FacultySection />
      <TestimonySection />
      <ArticleSection />
      <InvitationSection />
      <LayoutFooter />
    </>
  );
};

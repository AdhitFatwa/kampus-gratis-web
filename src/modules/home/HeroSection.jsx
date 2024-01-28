import { AiOutlineSearch } from "react-icons/ai";
import HeroBg from "/images/home/hero/hero-background.svg";
import { Button } from "../../components/default/Button";

const HeroSection = () => {
  return (
    <>
      <section className="relative">
        <img
          src={HeroBg}
          alt={"hero-background"}
          className="absolute z-0 left-0 top-0 w-full h-full object-cover object-center"
        />
        <div className="max-w-[1440px] mx-auto relative">
          <div className="pt-12 px-6 lg:px-0">
            <div className="flex lg:justify-between md:flex-wrap md:justify-center">
              <div className="self-center px-6 2xl:px-0">
                <h1 className="w-full md:w-[751px] md:text-[44px] md:leading-[54px] text-center md:text-start text-white text-2xl font-bold leading-[34px]">
                  Pendidikan Berkualitas Tanpa Biaya
                </h1>
                {/* <h2 className="w-full md:w-[751px] md:text-[28px] md:leading-[38px] text-center md:text-start text-orange-base text-xl font-bold leading-[27px] pt-6">
                  Kampus Gratis, Magang, dan Partime
                </h2> */}
                <div className="w-full md:w-[720px] text-center md:text-start text-neutral-50 text-xl font-normal leading-relaxed pt-6">
                  Platform Pendidikan Tinggi Gratis Pertama di Indonesia. Dengan akses belajar yang
                  mudah bagi semua tanpa syarat
                </div>
                <div className="justify-center flex mt-6 md:justify-start">
                  <Button
                    type="button"
                    className="text-white flex justify-center items-center bg-orange-base py-3 px-8  text-lg font-semibold rounded-lg"
                  >
                    Telusuri Program Kami <AiOutlineSearch className="ml-2" />
                  </Button>
                </div>
              </div>
              <div className="md:flex md:justify-center">
                <img
                  src="/images/home/hero/hero-image.png"
                  sizes="100vw"
                  alt="hero section"
                  style={{ width: "500px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

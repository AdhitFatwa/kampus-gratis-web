import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { ChoiceBannerCard } from "../../components/home/ChoiceBannerCard";

const BannerSection = () => {
  const ContentCardBanner = [
    // {
    //   title: "Program Utama Kampus Gratis",
    //   desc: "Kuliah, Pelatihan, Magang & Pengalaman Kerja",
    //   bg: "bg-white",
    //   hidden: "hidden",
    //   color: "text-black",
    //   src: "/images/home/banner/banner-1.png",
    // },
    // {
    //   title: "Dapatkan Sertifikat Gratis!",
    //   desc: "Sertifikat Sertifikat Sertifikat Sertifikat Sertifikat",
    //   bg: "bg-blue-base",
    //   color: "text-white",
    //   hidden: "",
    //   src: "/images/home/banner/banner-2.png",
    // },
  ];

  return (
    <section className="flex flex-col py-10 w-full px-2 md:px-8 justify-center">
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          rewind={true}
          modules={[Autoplay]}
          className="flex justify-center gap-3 mt-6 items-center min-h-fit"
        >
          {ContentCardBanner.map((card, key) => (
            <SwiperSlide className="" key={key}>
              <ChoiceBannerCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection;

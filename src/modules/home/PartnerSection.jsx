import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Partner1 from "/images/home/partner/partner-1.png";
import Partner2 from "/images/home/partner/partner-2.png";
import Partner3 from "/images/home/partner/partner-3.png";
import Partner4 from "/images/home/partner/partner-4.png";
import Partner5 from "/images/home/partner/partner-5.png";
import Partner6 from "/images/home/partner/partner-6.png";
import Partner7 from "/images/home/partner/partner-7.png";
import Partner8 from "/images/home/partner/partner-8.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const PartnerSection = () => {
  const _partner_logo = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
  ];
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(2);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(4);
      } else {
        setScreenWidth(5);
      }
    };

    // Inisialisasi lebar layar awal
    handleResize();

    // Tambahkan event listener untuk memantau perubahan lebar layar
    window.addEventListener("resize", handleResize);

    // Hapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="lg:flex flex-col pt-20 sm:px-8 text-center max-w-[1440px] mx-auto w-full">
      <h1 className="font-bold text-[36px] leading-none mb-8">
        Mitra <span className="text-red-base">Kampus Kami</span>
      </h1>

      <div className="flex justify-center items-center lg:w-full relative w-full lg:px-32">
        <Swiper
          slidesPerView={screenWidth}
          rewind={true}
          spaceBetween={30}
          centeredSlides={screenWidth === 2 ? true : false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="flex justify-center gap-3 mt-6 items-center min-h-fit"
        >
          {_partner_logo.map((logo, key) => (
            <SwiperSlide className="" key={key}>
              <img
                key={key}
                src={logo}
                width={undefined}
                height={undefined}
                alt="Partner Logo"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerSection;

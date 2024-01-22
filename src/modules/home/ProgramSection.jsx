import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Button } from "../../components/default/Button";
import { ChoiceProgramCard } from "../../components/home/ChoiceProgramCard";

const ProgramSection = () => {
  const ContentCardProgram = [
    {
      title: "Kampus Gratis",
      tag: "12 Program Studi",
      src: "/images/home/program/program-card-1.png",
    },
    {
      title: "Pelatihan",
      tag: "Sertifikasi Pelatihan",
      src: "/images/home/program/program-card-2.png",
    },
    {
      title: "Kampus Gratis Magang",
      tag: "Sertifikasi Kerja",
      src: "/images/home/program/program-card-3.png",
    },
    {
      title: "Kampus Gratis Partime",
      tag: "100+ Mitra Terhubung",
      src: "/images/home/program/program-card-4.png",
    },
  ];

  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(2);
      } else {
        setScreenWidth(3);
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
    <section className="lg:flex flex-col pt-20 w-full max-w-[1440px] mx-auto pb-8">
      <h1 className="text-blue-base font-bold text-[36px] leading-none lg:w-[329px]">
        Program Kami <span className="text-orange-base ">yang tersedia</span>
      </h1>

      <div className="sm:flex justify-center items-center lg:w-full relative w-full">
        <Swiper
          slidesPerView={screenWidth}
          spaceBetween={30}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="flex justify-center gap-3 mt-6 items-center min-h-fit"
        >
          {ContentCardProgram.map((card, key) => (
            <SwiperSlide key={key} className="flex justify-center">
              <ChoiceProgramCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          className="text-white border-2 border-blue-base bg-blue-base py-3 px-4 font-semibold text-sm rounded-lg flex justify-between items-center"
        >
          Selanjutnya{" "}
          <img width={6} height={6} src="icons/right-arrow-white.svg" alt="" className="pl-2 w-6" />{" "}
        </Button>
      </div>
    </section>
  );
};

export default ProgramSection;

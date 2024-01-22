import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const slides = [
  {
    src: "/images/layout/loginImg1.svg",
    title: "Selamat Datang di Kampus Gratis",
    description:
      "Platform belajar gratis pertama di Indonesia, belajar mudah dengan kampus gratis bisa diakses siapapun khususnya kaum marginal",
  },
  {
    src: "/images/layout/loginImg2.svg",
    title: "Solusi Pendidikan Gratis & Berkualitas",
    description:
      "Kamu bisa raih jenjang pendidikan yang cemerlang tanpa perlu mengeluarkan biaya sedikitpun",
  },
  {
    src: "/images/layout/loginImg3.svg",
    title: "Terdapat 4 fitur yang membantu kamu",
    description: "Dibimbing oleh mentor yang profesional, Dukungan untuk karir masa depan",
  },
];

const SliderLayout = () => {
  return (
    <div className="sm:flex hidden justify-center items-center lg:w-1/2  relative w-full">
      <Link to={"/"} className="absolute top-10 left-12">
        <img src={"/icons/logo_nav.svg"} width={120} height={120} alt="Logo" />
      </Link>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="flex justify-center gap-3 mt-6 items-center min-h-fit"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center flex-col">
            <figure className="flex justify-center h-[300px]">
              <img
                src={item.src}
                width={300}
                height={300}
                loading="eager"
                alt="Auth"
                className="transition-all max-w-[300px]s"
              />
            </figure>
            <section className="min-h-[120px] w-full px-14 text-center mb-4">
              <div className="text-[#171717] text-[22px]  font-[700]">{item.title}</div>
              <div className="w-full flex justify-center">
                <p className="text-[#737373] text-[13px] font-[500] max-w-[350px]">
                  {item.description}
                </p>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const AuthLayout = ({ title, description, children, h = "screen" }) => {
  return (
    <section
      className={`w-full bg-neutral-100 flex-row justify-center  lg:py-10 lg:px-14 md:p-8 sm:p-6 ${
        h === "full" ? "h-full items-stretch" : "lg:h-screen lg:min-h-[768px]"
      }`}
    >
      <section className="flex bg-white max-w-7xl w-full h-full rounded-lg shadow-lg flex-col  lg:flex-row mx-auto">
        <SliderLayout />
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center p-6 flex h-full w-full lg:w-1/2">
          <Link to={"/"} className="sm:hidden">
            <img
              src={"/icons/logo_nav.svg"}
              width={120}
              height={120}
              alt="Logo"
              className="sm:hidden absolute top-2 left-6"
            />
          </Link>
          <div
            className="flex flex-col
           w-full justify-center pt-[47px] items-center md:items-start md:justify-start gap-y-1"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#171717]">{title}</h1>
            <p className="text-sm  md:text-base text-[#737373] font-medium text-center md:text-left mt-1 lg:pr-36 lg:-mb-6">
              {description}
            </p>
          </div>
          <div className="flex flex-col w-full items-start pb-[37px] justify-start relative">
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Mousewheel } from "swiper/modules";
import { TestimonyCard } from "../../components/home/TestimonyCard";

const TestimonySection = () => {
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(1);
      } else {
        setScreenWidth(2);
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

  const ContentCardTestimony = [
    {
      name: "Naza Zulfiqi",
      job: "Frontend Developer",
      desc: "Program Kampus Gratis sangat membantu saya dalam mempelajari teknologi terbaru, terutama dalam bidang frontend. Terima kasih Kampus Gratis!",
      src: "/images/home/testimony/testimony-1.png",
    },
    {
      name: "John Doe",
      job: "UI Designer",
      desc: "UI Design yang diajarkan di Kampus Gratis sangat mudah dipahami dan sangat membantu saya dalam mempelajari UI Design. Terima kasih Kampus Gratis!",
      src: "/images/home/testimony/testimony-1.png",
    },
    // {
    //   name: "Zidane Arvito",
    //   job: "Backend Developer",
    //   desc: "Backend Development yang diajarkan di Kampus Gratis sangat mudah dipahami dan sangat membantu saya dalam mempelajari Backend Development. Terima kasih Kampus Gratis!",
    //   src: "/images/home/testimony/testimony-1.png",
    // },
    // {
    //   name: "Fakhri Haromain",
    //   job: "Backend Developer",
    //   desc: "Backend Development yang diajarkan di Kampus Gratis sangat mudah dipahami dan sangat membantu saya dalam mempelajari Backend Development. Terima kasih Kampus Gratis!",
    //   src: "/images/home/testimony/testimony-1.png",
    // },
    // {
    //   name: "Daffa Reyhan",
    //   job: "Backend Developer",
    //   desc: "Backend Development yang diajarkan di Kampus Gratis sangat mudah dipahami dan sangat membantu saya dalam mempelajari Backend Development. Terima kasih Kampus Gratis!",
    //   src: "/images/home/testimony/testimony-1.png",
    // },
  ];

  return (
    <section className="lg:flex overflow-y-hidden bg-primary-500 rounded-md  h-[580px] lg:h-[544px]  max-w-[1440px] mx-auto justify-start px-8  items-center my-20 relative">
      <div className="flex flex-col text-white text-left w-full lg:w-1/2 py-10 z-10">
        {/* <p className="text-sm tracking-wide z-10">Testimoni</p> */}
        <h1 className="text-2xl lg:text-4xl font-bold font-700 py-5 z-10">
          Apa kata mahasiswa Kampus Gratis?
        </h1>
        <p className="text-[16px] z-10">
          Kampus Gratis telah mencetak talenta hebat yang berkontribusi untuk negeri. Mari kita
          simak pendapat mereka terhadap kami
        </p>
        <div className="absolute z-0 right-0 -top-32 md:top-40 lg:top-0 g:pt-[250px]">
          {/* <img
            src="/images/home/testimony/testimony-fire.png"
            width={600}
            height={600}
            alt={"Banner 1"}
            loading="lazy"
            className="rounded-tr-lg md:block rounded-br-lg"
          /> */}
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2 cursor-default z-10">
        <Swiper
          direction={"vertical"}
          slidesPerView={screenWidth}
          spaceBetween={40}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          centeredSlides={false}
          modules={[Mousewheel, Autoplay]}
          className="flex items-center h-screen pb-20 px-4"
        >
          {ContentCardTestimony.map((card, key) => (
            <SwiperSlide className="flex items-center" key={key}>
              <TestimonyCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonySection;

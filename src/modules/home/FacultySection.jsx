import { ChoiceFacultyCard } from "../../components/home/ChoiceFacultyCard";

const FacultySection = () => {
  const ContentCardFaculty = [
    {
      title: "Pembiayaan dan Optimalisasi Bisnis",
      sks: "12",
      tag: ["4 Program Studi"],
      src: "/images/home/faculty/card-1.png",
    },
    {
      title: "Design Digital",
      sks: "60",
      tag: ["20 Program Studi"],
      src: "/images/home/faculty/card-2.png",
    },
    {
      title: "Teknologi Ekonomi Digital",
      sks: "60",
      tag: ["20 Program Studi"],
      src: "/images/home/faculty/card-3.png",
    },
  ];

  return (
    <section className="lg:flex flex-col gap-y-[20px] py-5 mx-auto max-w-[1440px]">
      <h1 className="absolute z-40 text-black font-[700] text-[36px]">Pilihan Fakultas</h1>
      <div className="flex absolute z-0 mt-4">
        <img
          src="/images/home/faculty/faculty-bg-text.svg"
          alt={"card-landing"}
          width={316}
          height={43}
          loading={"lazy"}
        />
      </div>

      <p className="mt-16 font-semibold tracking-normal text-xl">
        Tersedia 3 fakultas unggulan Kampus Gratis{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 grid-rows-1">
        {ContentCardFaculty.map((card, key) => (
          <ChoiceFacultyCard key={key} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FacultySection;

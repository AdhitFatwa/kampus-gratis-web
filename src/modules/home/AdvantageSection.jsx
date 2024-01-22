const AdvantageSection = () => {
  return (
    <section className="w-full lg:flex px-8 py-5 max-w-[1440px] mx-auto">
      <div className="w-full lg:w-1/2 lg py-5 md:flex md:justify-center lg:justify-center">
        <img
          width={500}
          height={500}
          src="/images/home/advantage/advantage-image.png"
          alt="advantages images"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:block md:flex lg:my-auto">
        <div className="w-full md:w-1/2 lg:w-full md:flex md:items-center md:justify-center lg:justify-start">
          <h1 className="text-2xl md:text-4xl block font-semibold">
            Mengapa{" "}
            <span className="lg:text-5xl text-4xl  block font-bold text-orange-base">
              Kampus Gratis?
            </span>
          </h1>
        </div>
        <div className="mt-4 text-md w-full md:w-1/2 lg:w-full">
          <p className="text-md text-neutral-600 lg:my-4 my-2">
            Ada banyak kategori pelatihan terlaris yang ada di Kampus Gratis
          </p>
          <div className="flex gap-2 py-2">
            <img width={24} height={24} src="/icons/checklist.svg" alt="" />
            <p>Belajar semua materi GRATIS</p>
          </div>
          <div className="flex gap-2 py-2">
            <img width={24} height={24} src="/icons/checklist.svg" alt="" />
            <p>Dibimbing oleh mentor yang profesional</p>
          </div>
          <div className="flex gap-2 py-2">
            <img width={24} height={24} src="/icons/checklist.svg" alt="" />
            <p>Dukungan untuk karir masa depan</p>
          </div>
          <div className="flex gap-2 py-2">
            <img width={24} height={24} src="/icons/checklist.svg" alt="" />
            <p>Pembelajaran yang fleksibel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;

export const MahasiswaCardHero = () => {
  return (
    <div className="w-full h-full px-6 py-3  bg-white rounded-[7px] shadow flex-col  items-start inline-flex">
      <div className="mx-auto font-semibold">Mahasiswa Kampus Gratis</div>
      <div className="self-stretch h-[50.77px] justify-center items-center inline-flex">
        <image width={113} height={40} src="/images/mahasiswa-kg.svg" alt="mahasiswa-kg" />
        <div className="flex-col justify-start items-start inline-flex">
          <div className="text-rose-500 text-[13.13px] font-bold  leading-[13.13px]">2185+</div>
          <div className="text-neutral-900 text-[13.13px] font-medium  leading-[13.13px]">
            Mahasiswa
          </div>
        </div>
      </div>
    </div>
  );
};

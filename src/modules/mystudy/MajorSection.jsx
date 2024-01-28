export const MajorSection = (dataMajorProps) => {
  const {
    student_count,
    subject_count,
    credit_count,
    current_semester,
    description,
    name,
    thumbnail,
  } = dataMajorProps;

  const majorDetailsAmount = [student_count, subject_count, credit_count, current_semester];

  const constMajorValue = [
    // { icon: "/images/mystudy/mahasiswa.svg", detail: "Mahasiswa", warna: "#E9F6FD" },
    // { icon: "/images/mystudy/matkul.svg", detail: "Matkul", warna: "#E3FBDA" },
    // { icon: "/images/mystudy/sks.svg", detail: "Sks", warna: "#FEF6D0" },
    // { icon: "/images/mystudy/semester.svg", detail: "Semester", warna: "#E9F6FD" },
  ];

  return (
    <div className="flex md:flex-row flex-col mx-auto py-8 bg-white gap-0 md:gap-4">
      <div className="lg:min-w-[240px] md:min-w-[300px] max-md:w-full md:min-h-[240px] mx-auto lg:mx-0">
        <img
          src={thumbnail}
          alt={"thumbnail-images"}
          width={240}
          height={240}
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="py-6 md:py-0 w-full flex flex-col gap-y-6 sm:gap-y-6 lg:justify-between">
        <div className="mx-auto md:mx-0">
          <h2 className="text-sm font-medium">Program Studi</h2>
          <h1 className="md:text-2xl text-[28px] leading-9 font-bold my-1">{name || "unknown"}</h1>
          <p className="text-neutral-600 text-sm md:text-xs lg:text-sm my-4 text-justify">
            {description || "unknown"}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 rounded-lg gap-y-4">
          {constMajorValue.map((x, i) => {
            return (
              <div
                key={i}
                style={{ background: x.warna }}
                className="flex py-3 px-5 justify-center rounded-lg items-center"
              >
                <div className="flex min-w-[120px] md:min-w-fit">
                  <img src={x.icon} alt={`${x.detail}-icon`} className="mr-3" />
                </div>
                <div className="flex flex-row items-center lg:items-start gap-1 lg:flex-col text-neutral-800 justify-center">
                  <p className="font-bold text-lg md:text-sm ">{majorDetailsAmount[i] || "-"}</p>
                  <p className="text-lg md:text-sm font-semibold">{x.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

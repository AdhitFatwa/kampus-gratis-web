import { useState } from "react";
import { Card } from "../../components/default/Card";

export const SubjectSection = ({ dataSubjectProps }) => {
  const [filteredData, setFilteredData] = useState(dataSubjectProps);
  const handleInputChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filtered = name
      ? dataSubjectProps.filter((item) => item.name.toLowerCase().includes(name))
      : dataSubjectProps;
    setFilteredData(filtered);
  };
  return (
    <div className="w-full mx-auto">
      <h1 className="w-fit mx-auto font-bold text-2xl">Mata Kuliah</h1>
      <div className="">
        {/* <div className="bg-[#F5F5F5] h-[56px] mt-10 mb-10 rounded-[8px] text-black">
          <div className="flex gap-3 py-4 ">
            <img src={"/images/mystudy/search.svg"} alt={"search"} width={28} className="ml-3" />
            <input
              type={"text"}
              className="bg-transparent w-full focus:outline-none bg-[#F5F5F5]"
              placeholder="Cari Matakuliah"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div> */}
      </div>
      <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-7 gap-x-9 mt-[30px] pb-40">
        {filteredData?.length === 0 ? (
          <div className="w-full absolute">
            <div className="w-fit m-auto p-1 lg:p-4 bg-white mb-10">
              <img src={"/images/mystudy/orang-bingung.svg"} alt="simulasi-null" />
              <h1 className="text-xl font-bold text-center">Tidak Ada Data Mata Kuliah</h1>
            </div>
          </div>
        ) : (
          <>
            {filteredData?.length > 0 &&
              filteredData?.map((subject) => {
                const thumbnailImg = subject.thumbnail.includes(".") ? subject.thumbnail : "";
                return (
                  <Card
                    href={`/studi-ku/${subject.name}/${subject.id}`}
                    key={subject.id}
                    className="rounded-lg px-6 lg:px-4 shadow-xl h-[470px] relative"
                    hasImage={true}
                    imgwidth={240}
                    imgheight={240}
                    imgStyle="rounded-lg md:h-[240px] md:w-full object-cover mx-auto md:mx-0"
                    src={thumbnailImg || "/images/mystudy/orang-bingung.svg"}
                    titleStyle={"text-xl font-bold mt-0 text-primary-500"}
                    icon={
                      <div className="flex justify-end gap-2">
                        <div className="text-yellow-500 py-1 px-2 my-3 text-[12px] font-semibold rounded-lg bg-yellow-100">
                          {subject.credit} SKS
                        </div>
                        <div className="text-primary-500 py-1 px-2 my-3 text-[12px] font-semibold rounded-lg bg-primary-100">
                          {subject.session_count} Pertemuan
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col w-full">
                      <p className="text-sm text-neutral-base">
                        {subject.subject_code ? subject.subject_code : "#NoSubject"}
                      </p>
                      <h1 className="text-base font-bold mt-0 text-primary-500 w-full">
                        Matkul {subject.name}
                      </h1>
                      <p className="text-sm text-neutral-base pb-5">{subject.teacher_name}</p>
                      <div className="flex items-center w-full absolute bottom-4">
                        <div className="w-[65%] lg:w-[80%]">
                          <div className="flex w-full bg-neutral-350 rounded-full h-2.5">
                            <div
                              className="bg-success-500 h-2.5 rounded-full"
                              style={{
                                width: `${subject.progress_percentage}%`,
                              }}
                            />
                          </div>
                        </div>
                        <p className="text-neutral-base text-center w-[35%] lg:w-[20%] pr-8 lg:pr-5 pb-2">
                          {subject.progress_percentage}%
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

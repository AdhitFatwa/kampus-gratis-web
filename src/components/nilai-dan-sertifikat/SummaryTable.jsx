import { Fragment } from "react";
import { nilai } from "../../data/nilai";
import { Button } from "../default/Button";

export const SummaryTable = ({ setDetailStatus }) => {
  const data = nilai;
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto mb-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden ">
            <table className="min-w-full divide-y divide-neutral-400 ">
              <thead className="bg-primary-500">
                <tr className="divide-x divide-neutral-300 ">
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Semester
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    SKS Diambil
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    SKS Luus
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    IPK
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200  text-center text-primary-600 font-bold">
                {data?.semestrial_average?.semester_grades?.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                        {item.semester}
                      </td>
                      <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                        {item.credit_count}
                      </td>
                      <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                        {item.passed_credit_count}
                      </td>
                      <td className="px-6 py-4  border-r whitespace-nowrap text-sm">{item.gpa}</td>
                    </tr>
                  </Fragment>
                ))}
                <tr>
                  <td scope="col" className="text-center py-4" colSpan={3}>
                    Rata-rata
                  </td>
                  <td className="col-span-4 py-4">{data?.semestrial_average?.average_gpa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-full flex justify-end mb-10">
        <Button
          className=" bg-[#3EB449] hover:bg-[#339c3e] cursor-pointer transition-colors ease-in-out duration-300 shadow-md text-sm rounded-lg flex relative items-center justify-center text-white w-full h-[42px] lg:w-[328px] lg:h-[56px] text-[16px] font-medium"
          type={"button"}
          onClick={() => {
            setDetailStatus(true);
          }}
        >
          Lihat Detail Nilai
        </Button>
      </div>
    </div>
  );
};

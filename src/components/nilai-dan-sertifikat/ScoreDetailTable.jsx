export const ScoreDetailTable = ({ detailScore }) => {
  return (
    <div className="flex flex-col w-auto ">
      <div className=" overflow-x-scroll scrollbar-hide md:scrollbar-default">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-neutral-400 dark:divide-gray-700">
              <thead className="bg-primary-500">
                <tr className="divide-x divide-neutral-300 dark:divide-gray-700">
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    Kode Matkul
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    Mata Kuliah
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    SKS
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    Huruf Mutu
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    Angka Mutu
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-1  text-center font-medium text-white text-sm"
                  >
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-gray-700 text-center text-primary-600 font-bold">
                {detailScore.map((item, i) => (
                  <tr key={i}>
                    <td className="lg:px-6 lg:py-4 px-3 py-1 border-r whitespace-nowrap text-sm ">
                      {i + 1}
                    </td>
                    <td className="lg:px-6 lg:py-4 px-3 py-1 border-r whitespace-nowrap text-sm ">
                      {item.subject_code}
                    </td>
                    <td className="lg:px-6 lg:py-4 px-3 py-1 border-r whitespace-nowrap text-sm ">
                      {item.subject_name}
                    </td>
                    <td className="lg:px-6 lg:py-4 px-3 py-1  border-r whitespace-nowrap text-sm ">
                      {item.credit}
                    </td>
                    <td className="lg:px-6 lg:py-4 px-3 py-1  border-r whitespace-nowrap text-sm ">
                      {item.score_letter}
                    </td>
                    <td className="lg:px-6 lg:py-4 px-3 py-1  border-r whitespace-nowrap text-sm ">
                      {item.score_gpa}
                    </td>
                    <td className="lg:px-6 lg:py-4 px-3 py-1  border-r whitespace-nowrap text-sm ">
                      {item.enroll_status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

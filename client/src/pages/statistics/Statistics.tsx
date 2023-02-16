import React from "react";

const Statistics = () => {
  return (
    <>
      <div>
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex-shrink-0">
                <span className="text-gray-900 text-2xl font-bold leading-none sm:text-3xl">
                  $5,385
                </span>
                <h3 className="text-gray-500 text-base font-normal">
                  Ingresos Mensuales
                </h3>
              </div>
              <div className="flex flex-1 items-center justify-end text-base font-bold text-green-500">
                12.5%
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <img
              id="main-chart"
              src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg"
            />
          </div>
          <div className="rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8 ">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-gray-900 mb-2 text-xl font-bold">
                  Fuentes de Ingreso
                </h3>
                <span className="text-gray-500 text-base font-normal">
                  Una lista de los ingresos mensuales
                </span>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="hover:bg-gray-100 rounded-lg p-2 text-sm font-medium text-cyan-600"
                >
                  Ver todo
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="overflow-x-auto rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow sm:rounded-lg">
                    <table className="divide-gray-200 min-w-full divide-y">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="text-gray-500 p-4 text-left text-xs font-medium uppercase tracking-wider"
                          >
                            Ingreso
                          </th>
                          <th
                            scope="col"
                            className="text-gray-500 p-4 text-left text-xs font-medium uppercase tracking-wider"
                          >
                            Fecha
                          </th>
                          <th
                            scope="col"
                            className="text-gray-500 p-4 text-left text-xs font-medium uppercase tracking-wider"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-normal">
                            Payment from{" "}
                            <span className="font-semibold">Bonnie Green</span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 23 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            $2300
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="text-gray-900 rounded-left whitespace-nowrap rounded-lg p-4 text-sm font-normal">
                            Payment refund to{" "}
                            <span className="font-semibold">#00910</span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 23 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            -$670
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-normal">
                            Payment failed from{" "}
                            <span className="font-semibold">#087651</span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 18 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            $234
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="text-gray-900 rounded-left whitespace-nowrap rounded-lg p-4 text-sm font-normal">
                            Payment from{" "}
                            <span className="font-semibold">Lana Byrd</span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 15 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            $5000
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-normal">
                            Payment from{" "}
                            <span className="font-semibold">Jese Leos</span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 15 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            $2300
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="text-gray-900 rounded-left whitespace-nowrap rounded-lg p-4 text-sm font-normal">
                            Payment from{" "}
                            <span className="font-semibold">
                              THEMESBERG LLC
                            </span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 11 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            $560
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-normal">
                            Payment from{" "}
                            <span className="font-semibold">Lana Lysle</span>
                          </td>
                          <td className="text-gray-500 whitespace-nowrap p-4 text-sm font-normal">
                            Apr 6 ,2021
                          </td>
                          <td className="text-gray-900 whitespace-nowrap p-4 text-sm font-semibold">
                            $1437
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 flex items-center justify-center ">
        {" "}
        <div className="flex-col items-center justify-center ">
          {" "}
          <div className="flex">
            {" "}
            <div className="flex h-auto w-full max-w-7xl flex-col items-center justify-around space-x-4 space-y-4 p-4 lg:h-60 lg:flex-row ">
              {" "}
              <div className="ml-4 flex h-40 w-[100%] items-center justify-center rounded border bg-white px-6 shadow-xl md:mt-4 md:w-72 lg:px-0">
                {" "}
                <div className="flex-col items-center space-y-2 px-0 md:px-6">
                  {" "}
                  <div className="flex items-center justify-between space-x-6">
                    {" "}
                    <div className="flex items-center space-x-1 ">
                      {" "}
                      <div className="text-lg font-medium text-violet-500">
                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      </div>{" "}
                      <div className="text-gray-500 text-sm font-medium">
                        Fuentes
                      </div>{" "}
                    </div>{" "}
                    <div className="bg-gray-200 text-gray-400 rounded-2xl px-2 py-0.5 text-xs font-medium">
                      30 Days
                    </div>{" "}
                  </div>{" "}
                  <div className="text-3xl font-bold">3</div>{" "}
                  <div className="flex items-center space-x-1 font-bold text-red-500">
                    {" "}
                    <div className="text-xl">
                      <ion-icon name="trending-down-outline"></ion-icon>
                    </div>{" "}
                    <div className="text-sm">0.5% less</div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="ml-4 flex h-40 w-[100%] items-center justify-center rounded border bg-white px-6 shadow-xl md:w-72 lg:px-0">
                {" "}
                <div className="flex-col items-center space-y-2 px-0 md:px-6">
                  {" "}
                  <div className="flex items-center justify-between space-x-6">
                    {" "}
                    <div className="flex items-center space-x-1 ">
                      {" "}
                      <div className="text-lg font-medium text-violet-500">
                        <ion-icon name="briefcase-outline"></ion-icon>
                      </div>{" "}
                      <div className="text-gray-500 text-sm font-medium">
                        Gastos
                      </div>{" "}
                    </div>{" "}
                    <div className="bg-gray-200 text-gray-400 rounded-2xl px-2 py-0.5 text-xs font-medium">
                      30 Days
                    </div>{" "}
                  </div>{" "}
                  <div className="text-3xl font-bold">27</div>{" "}
                  <div className="flex items-center space-x-1 font-bold text-green-500">
                    {" "}
                    <div className="text-xl">
                      <ion-icon name="trending-up-outline"></ion-icon>
                    </div>{" "}
                    <div className="text-sm">4.9% more</div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="ml-4 flex h-40 w-[100%] items-center justify-center rounded border bg-white px-6 shadow-xl md:w-72 lg:px-0">
                {" "}
                <div className="flex-col items-center space-y-2 px-0 md:px-6">
                  {" "}
                  <div className="flex items-center justify-between space-x-6">
                    {" "}
                    <div className="flex items-center space-x-1 ">
                      {" "}
                      <div className="text-lg font-medium text-violet-500">
                        <ion-icon name="document-outline"></ion-icon>
                      </div>{" "}
                      <div className="text-gray-500 text-sm font-medium">
                        Oportunidades
                      </div>{" "}
                    </div>{" "}
                    <div className="bg-gray-200 text-gray-400 rounded-2xl px-2 py-0.5 text-xs font-medium">
                      30 Days
                    </div>{" "}
                  </div>{" "}
                  <div className="text-3xl font-bold">6</div>{" "}
                  <div className="flex items-center space-x-1 font-bold text-green-500">
                    {" "}
                    <div className="text-xl">
                      <ion-icon name="trending-up-outline"></ion-icon>
                    </div>{" "}
                    <div className="text-sm">3.7% more</div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    
    </>
  );
};

export default Statistics;

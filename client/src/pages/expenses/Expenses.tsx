export default function Expenses() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 rounded-2xl border-none bg-white py-4 px-6 md:h-[100%]">
        <div className="bg-gray-800 flex items-center justify-center p-4 ">
          {" "}
          <div className="flex w-full max-w-7xl flex-col md:w-[70%]">
            {" "}
            <div className="flex flex-col lg:flex-row ">
              {" "}
              <div className="bg-gray-700 mx-4 my-2 flex h-32 w-[90%] items-start justify-center rounded-xl py-4 px-8 shadow-lg lg:w-1/2">
                {" "}
                <div className="flex w-full items-center justify-start">
                  {" "}
                  <div className="w-[85%] flex-col">
                    {" "}
                    <div className="my-2 text-sm font-medium text-violet-600">
                      Total Income
                    </div>{" "}
                    <div className="class flex items-center">
                      {" "}
                      <div className="text-gray-200 text-3xl font-bold">
                        $2,30,568
                      </div>{" "}
                      <div className="mx-2 flex items-center justify-between rounded-xl px-0.5 py-0.5 font-medium text-green-500 ">
                        {" "}
                        <div className="rounded-lg bg-green-200 px-2 text-xs">
                          + 78%
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="bg-gray-300 my-1 h-1 w-full rounded">
                      {" "}
                      <div className="h-1 w-[78%] rounded bg-green-500"></div>{" "}
                    </div>{" "}
                    <div className="text-gray-400 text-xs font-medium ">
                      Weekly Goal
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-gray-700 mx-4 my-2 flex h-32 w-[90%] items-start justify-center rounded-xl py-4 px-8 shadow-lg lg:w-1/2">
                {" "}
                <div className="flex w-full items-center justify-start">
                  {" "}
                  <div className="w-[85%] flex-col">
                    {" "}
                    <div className="my-2 text-sm font-medium text-violet-600">
                      Engaged Users
                    </div>{" "}
                    <div className="class flex items-center">
                      {" "}
                      <div className="text-gray-200 text-3xl font-bold">
                        32.78%
                      </div>{" "}
                      <div className="mx-2 flex items-center justify-between rounded-xl px-0.5 py-0.5 font-medium text-red-500 ">
                        {" "}
                        <div className="rounded-lg bg-red-200 px-2 text-xs">
                          - 7%
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="bg-gray-300 my-1 h-1 w-full rounded">
                      {" "}
                      <div className="h-1 w-[33%] rounded bg-red-500"></div>{" "}
                    </div>{" "}
                    <div className="text-gray-400 text-xs font-medium ">
                      Daily Goal
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}


          </div>{" "}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Estado de la cuenta</h3>
          <span className="text-base font-medium">saldo</span>
          <h2 className="text-5xl font-semibold">-$5.840</h2>
        </div>
        <div className=" flex justify-between">
          <div className="rounded-md bg-light-blue p-3">
            <p className="text-lg font-medium">Expensas totales</p>
            <p className="text-3xl font-semibold text-medium-blue">$25.360</p>
          </div>
          <p className="h-min rounded-md bg-participacion-gray p-1 text-xs font-bold">
            Participacion:14%
          </p>
        </div>
        <div className=" flex justify-between bg-light-blue px-3 text-sm font-normal text-vencimiento-gray">
          <p>Vencimiento</p>
          <p>10/01/2022</p>
        </div>
        <p className="text-center text-sm font-normal text-medium2-blue">
          Ver expensas
        </p>
      </div>
    </div>
  );
}

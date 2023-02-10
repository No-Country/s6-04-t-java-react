import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const reports = [
  {
    ticketNumber: "#143567",
    date: "22/09/22",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam voluptates modi aperiam in nesciunt voluptas earum obcaecati, temporibus doloremque amet vero, odit a asperiores nisi reprehenderit excepturi, perspiciatis commodi!",
    status: "pending",
  },
  {
    ticketNumber: "#113841",
    date: "14/06/21",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam voluptates modi aperiam in nesciunt voluptas earum obcaecati, temporibus doloremque amet vero, odit a asperiores nisi reprehenderit excepturi, perspiciatis commodi!",
    status: "resolved",
  },
];

type FormValues = {
  createRequest: string;
  areaRequest: string;
  descriptionRequest: string;
};

function Request() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <div className=" flex h-full w-full flex-col gap-y-4 1048:grid 1048:grid-cols-2 1048:gap-x-6 1048:p-6">
      <div className="h-full  max-w-2xl rounded-3xl bg-white px-6">
        <h2 className="my-6 text-3xl font-semibold text-[#464265]">
          Realizar un reporte
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h3 className="mb-3 text-base font-bold">Qué deseas hacer?</h3>
            <select
              className="w-full rounded-lg border border-reporte-borderColor p-3 text-sm font-bold text-reporte-textColor"
              {...register("createRequest")}
            >
              <option value="Solicitar reparacion">Elige una opción</option>
              <option value="Solicitar reparacion">
                Solicitar una reparación
              </option>
              <option value="Crear reporte">Crear reporte</option>
              <option value="Objeto encontrado/perdido">
                Objeto encontrado/perdido
              </option>
            </select>
          </div>
          <div className="mb-6">
            <h3 className="mb-3 text-base font-bold">
              Sobre qué unidad/espacio?
            </h3>
            <select
              className="w-full rounded-lg border border-reporte-borderColor p-3 text-sm font-bold text-reporte-textColor"
              {...register("areaRequest")}
            >
              <option value="mi-unidad">Mi unidad</option>
              <option value="Quincho">Quincho</option>
              <option value="Alberca">Alberca</option>
              <option value="Asador">Asador</option>
              <option value="Gimnasio">Gimnasio</option>
              <option value="otro">otro</option>
            </select>
          </div>
          <div className=" flex flex-col">
            <h3 className="mb-3 text-base font-bold">Observaciones</h3>
            <textarea
              rows={6}
              className="mb-6 rounded-lg border border-reporte-borderColor p-3"
              placeholder="Nos puedes brindar más detalles?"
              {...register("descriptionRequest", {})}
            />
            <button
              className="mt-20 mb-10 w-full rounded-lg bg-zinc-400 py-4 text-2xl font-semibold text-white"
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
      <div className="h-full max-w-2xl rounded-3xl bg-white px-6">
        <h2 className="my-6 text-3xl font-semibold text-[#464265]">Reportes</h2>
        <table className="mb-6 w-full table-fixed">
          <thead className="bg-background-table">
            <tr className=" text-left text-[#64748B]">
              <th className="whitespace-nowrap rounded-l-md p-3  font-Poppins text-sm">
                Ticket No.
              </th>
              <th className="mx-4 whitespace-nowrap font-Poppins text-sm">
                Fecha
              </th>
              <th className="mx-4 whitespace-nowrap font-Poppins text-sm">
                Asunto
              </th>
              <th className="mx-4 whitespace-nowrap rounded-r-md text-center font-Poppins text-sm">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.ticketNumber}
                className="border-b border-border-rowTable"
              >
                <td
                  className="p-2 text-start text-sm font-medium text-[#38BDF8]
              "
                >
                  {report.ticketNumber}
                </td>
                <td className=" text-sm  font-normal text-vencimiento-gray">
                  {report.date}
                </td>
                <td className=" truncate text-sm font-medium text-asunto-rowTable">
                  {report.subject}
                </td>
                <td className="py-3">
                  <p
                    className={`mx-auto w-24 rounded-2xl py-[2px] text-center text-sm font-medium ${
                      report.status === "resolved"
                        ? "bg-[#C7FEE7] text-[#06B3D9]"
                        : "bg-[#FEF3C7] text-[#D97706]"
                    } `}
                  >
                    {report.status === "resolved" ? "Resuelto" : "En revisión"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Request;

import { useGetReports } from "../../hooks/useRequest";

const reportSubject = (turn: string) => {
  switch (turn) {
      case 'REPAIR':
      return 'Reparación'

      case 'COMPLAIN':
      return 'Reporte'

      case 'MISSING_ITEM':
      return 'Objeto perdido/encontrado'

      case 'OTHER':
      return 'Otro'

      default:
      break;
  }
}
  
const RequestList = () => {

  const turnToDate = (date: string) => {
    const turnToDate = new Date(date)
    const numberDay = turnToDate.toLocaleDateString("es-ES", {day: "2-digit", month: '2-digit', year: '2-digit'})
    return numberDay
  }

  const {data: reports, isLoading } = useGetReports()

  return (
    <div className="h-full max-w-2xl rounded-3xl bg-white px-6">
        <h2 className="my-6 text-3xl font-semibold text-[#464265]">Reportes</h2>
        {isLoading ?
            <div className="text-center mt-3">Cargando...</div>
          :
        <table className="mb-6 w-full table-fixed">
          <thead className="bg-background-table">
            <tr className=" text-left text-[#64748B]">
              <th className="whitespace-nowrap rounded-l-md p-3  font-Poppins text-xs md:text-sm">
                Ticket No.
              </th>
              <th className="mx-4 whitespace-nowrap font-Poppins text-xs md:text-sm">
                Fecha
              </th>
              <th className="mx-4 whitespace-nowrap font-Poppins text-xs md:text-sm">
                Asunto
              </th>
              <th className="mx-4 whitespace-nowrap rounded-r-md text-center font-Poppins text-xs md:text-sm">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            <>
            {reports ? reports.map((report) => (
              <tr
                key={report.id}
                className="border-b border-border-rowTable"
              >
                <td
                  className="p-2 text-start text-xs md:text-sm font-medium text-[#38BDF8]
              "
                >
                  {`#${report.id}`}
                </td>
                <td className=" text-xs md:text-sm  font-normal text-vencimiento-gray">
                  {turnToDate(report.creationDate!)}
                </td>
                <td className=" truncate text-xs md:text-sm font-medium text-asunto-rowTable">
                  {reportSubject(report.issue)}
                </td>
                <td className="py-3">
                  <p
                    className={`mx-auto w-20 md:w-24 rounded-2xl py-[2px] text-center text-xs md:text-sm font-medium ${
                      report.status === "RESOLVED"
                        ? "bg-[#C7FEE7] text-[#06B3D9]"
                        : "bg-[#FEF3C7] text-[#D97706]"
                    } `}
                  >
                    {report.status === "RESOLVED" ? "Resuelto" : "En revisión"}
                  </p>
                </td>
              </tr>
            )) : null}
            </>
            </tbody>
        </table>
            }
      </div>
  )
}
export default RequestList
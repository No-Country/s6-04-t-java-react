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

const RequestList = () => {
  return (
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
  )
}
export default RequestList
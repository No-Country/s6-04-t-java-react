import "../pages/message/classMessage.css";
interface PropsMessage {
  by: string;
  clase: string;
}
export default function Message({ by, clase }: PropsMessage) {
  return (
    <div className={` rounded-2xl border-2 border-solid border-gray py-4 pl-4`}>
      <div
        className={`inline justify-center rounded-[2rem]  border-2 p-1 px-2 ${clase}`}
      >
        <span className="">{clase}</span>
      </div>
      <h3 className="b-1 py-2 font-normal text-[1] text-black">De: {by}</h3>
      <p className="text-sm font-normal text-[#6F6F6F]">
        Primer mensaje de la Administracion,siguiente junta favor de confirmar
        asistencia
      </p>
      <button></button>
    </div>
  );
}

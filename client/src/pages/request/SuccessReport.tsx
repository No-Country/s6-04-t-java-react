import { BsXLg } from "react-icons/bs";
import { ViewState } from "../../models/Amenities";

type Props = {
  viewsStates: ViewState
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
}
const SuccessReport = ({viewsStates, onClose}: Props) => {
  return (
    <div
      className={`${
        viewsStates.showSuccessView ? "flex" : "hidden"
      } h-full max-h-full w-full flex-col items-center gap-6`}
    >
      <button onClick={onClose} className="self-start">
        <BsXLg />
      </button>
      <h2 className="text-2xl font-semibold text-[#464265]">
        Reporte realizado!
      </h2>
      <p>Su reporte ha sido creado exitosamente!</p>
      <button onClick={onClose} className="text-sm font-bold text-[#5F81FF]">
        Cerrar
      </button>
    </div>
  );
}
export default SuccessReport
import { BsXLg } from "react-icons/bs";
import { ViewState } from "../../models/Amenities";

type Props = {
    viewsStates: ViewState
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ErrorView = ({onClose, viewsStates}: Props) => {
  return (
    <div
      className={`${
        viewsStates.showErrorView ? "flex" : "hidden"
      } h-full max-h-full w-full flex-col items-center gap-6`}
    >
      <button onClick={onClose} className="self-start">
        <BsXLg />
      </button>
      <h2 className="text-2xl font-semibold text-[#464265]">
        Error al reservar
      </h2>
      <p>Hubo un error al realizar la reserva, intente nuevamente.</p>
      <button onClick={onClose} className="text-sm font-bold text-[#5F81FF]">
        Cerrar
      </button>
    </div>
  );
};
export default ErrorView;
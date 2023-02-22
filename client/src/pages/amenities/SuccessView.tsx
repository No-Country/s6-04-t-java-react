import { NextStepData, ViewState } from "./Amenities";
import { successIcon, leftArrow } from "../../assets/amenitiesIcons/index";
import { BsXLg } from "react-icons/bs";

type Props = {
    viewsStates: ViewState
    nextStepData: NextStepData
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SuccessView = ({nextStepData, onClose, viewsStates}: Props) => {
  return (
    <div
      className={`${
        viewsStates.showSuccessView ? "flex" : "hidden"
      } h-full max-h-full w-full flex-col items-center justify-evenly gap-6`}
    >
      <button onClick={onClose} className="self-start">
        <BsXLg />
      </button>
      <img src={successIcon} alt="success icon" className="w-32" />
      <h2 className="text-2xl font-semibold text-[#464265]">
        Reserva realizada!
      </h2>
      <div className="w-full rounded-2xl bg-[#F9F2FF] p-6">
        <p className="text-sm font-normal text-[#464265]">Espacio</p>
        <h3 className="text-lg font-medium text-[#464265]">
          {nextStepData.name}
        </h3>
        <p className="text-sm font-normal text-[#464265]">Fecha</p>
        <h3 className="text-lg font-medium text-[#464265] capitalize">
          {nextStepData.reservationDate}
        </h3>
        <p className="text-sm font-normal text-[#464265]">Horario</p>
        <h3 className="text-lg font-medium text-[#464265]">
          {nextStepData.turn}
        </h3>
      </div>
      <div className="flex items-center gap-3">
        <img className="hidden xl:block" src={leftArrow} alt="left arrow" />
        <p className="hidden text-sm font-normal text-[#ABABAB] xl:block">
          Puedas verla aquí al lado
        </p>
      </div>
      <button onClick={onClose} className="text-sm font-bold text-[#5F81FF]">
        Cerrar
      </button>
    </div>
  );
};
export default SuccessView;

import {
  BsFillSunFill,
  BsFillSunriseFill,
  BsFillMoonFill,
} from "react-icons/bs";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "./styles.css";
import { useGetReservation } from "../../hooks/useAmenity";
import axios from "axios";
import { amenities } from "./data";
import SuccessView from "./SuccessView";
import CommonSpaces from "./CommonSpaces";
import Reservations from "./Reservations";
import { Reservation, Schedule } from "../../models/Amenities";

export type NextStepData = {
  name: string;
  reservationDate: string;
  turn: string;
};

export type ViewState = {
  showCalendar: boolean
  showNextStep: boolean
  showSuccessView: boolean
  showTurns: boolean}

export type Schedules = Schedule[];

const schedules: Schedules = [
  {
    icon: <BsFillSunriseFill />,
    name: "Mañana",
    hours: "09:00 - 13:00",
    value: "MORNING",
  },
  {
    icon: <BsFillSunFill />,
    name: "Tarde",
    hours: "14:00 - 18:00",
    value: "AFTERNOON",
  },
  {
    icon: <BsFillMoonFill />,
    name: "Noche",
    hours: "20:00 - 00:00",
    value: "NIGHT",
  },
];

const initStateReservationData = {
  name: "",
  reservationDate: null,
  turn: "",
};

const initViewsState: ViewState = {
  showCalendar: false,
  showNextStep: false,
  showSuccessView: false,
  showTurns: false
}

const AmenitiesInfo = () => {
  const [viewsStates, setViewsStates] = useState(initViewsState)
  const [date, setDate] = useState(new Date());
  const [reservationData, SetReservationData] = useState(
    initStateReservationData as Reservation
  );
  const [nextStepData, SetNextStepData] = useState({
    name: "",
    reservationDate: "",
    turn: "",
  } as NextStepData);

  const onClickDay = () => {
    setViewsStates((prev) => ({...prev, showTurns: true}))
  };

  const onChangeSelectAmenity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetReservationData((prev) => ({ ...prev, name: e.target.value }));
    SetNextStepData((prev) => ({
      ...prev,
      name: e.target.selectedOptions[0].innerText,
    }));
    setViewsStates((prev) => ({...prev, showCalendar: true}))
  };

  const changeDate = (e: Date) => {
    setDate(e);
    SetReservationData((prev) => ({ ...prev, reservationDate: e }));
    SetNextStepData((prev) => ({
      ...prev,
      reservationDate: e.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));
  };

  const onChangeHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetReservationData((prev) => ({ ...prev, turn: e.target.value }));
    const time = e.target.labels![0].childNodes[1].textContent;
    const range = e.target.labels![0].childNodes[2].textContent;

    const hour = `${time} - ${range}`;
    SetNextStepData((prev) => ({ ...prev, turn: hour }));
  };

  const onClickReservation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setViewsStates((prev) => ({...prev, showNextStep: true}))
  };

  const onClickConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setViewsStates((prev) => ({...prev, showNextStep: false, showSuccessView: true}))
    console.log(reservationData)
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    SetReservationData(initStateReservationData);
    setViewsStates(initViewsState)
  };

  const disabledDates = [new Date("2023-02-20"), new Date("2023-02-22"),new Date("2023-02-28"), new Date("2023-01-27")]


  // const {data: reservations} = useGetReservation()

  return (
    <div className="flex h-full w-full flex-col gap-6 px-6 pb-6 1048:flex-row">
      <div className="flex w-full flex-col items-stretch gap-6 lg:max-w-xl 2xl:max-w-full">
        <CommonSpaces />
        <Reservations />
      </div>
      <div className="h-full w-full rounded-2xl bg-white py-4 px-6">
        <h2
          className={`${
            viewsStates.showSuccessView ? "hidden" : "flex"
          } mb-3 text-2xl font-semibold`}
        >
          Realizar una reserva
        </h2>

        <form
          className="h-full w-full"
          action=""
          onSubmit={() => console.log(reservationData)}
        >
          <div
            className={`${
              viewsStates.showNextStep || viewsStates.showSuccessView ? "hidden" : "flex"
            } flex-col items-center gap-2 font-Poppins`}
          >
            <label
              className="self-start text-start font-bold text-[#464265]"
              htmlFor="selectAmenity"
            >
              Selecciona espacio
            </label>
            <select
              onChange={onChangeSelectAmenity}
              id="selectAmenity"
              value={reservationData.name}
              placeholder="Elegir espacio"
              className="text-md w-full rounded-xl border-2 border-[#0000001A] bg-transparent p-3 font-medium text-[#5533FF] focus:outline-none"
            >
              <option disabled value="">
                Elegir espacio
              </option>
              {amenities &&
                amenities.map((amenity) => (
                  <option key={amenity.id} value={amenity.id}>
                    {amenity.name}
                  </option>
                ))}
            </select>
            {viewsStates.showCalendar ? (
              <Calendar
                calendarType="US"
                onChange={changeDate}
                value={date}
                onClickDay={onClickDay}
                tileDisabled={({date}) => disabledDates.some(disabledDate => date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()+1)}
              />
            ) : null}
            {viewsStates.showTurns ? (
              <div className="flex w-full flex-col items-center justify-center gap-6 py-6">
                <h2 className="self-start font-Poppins font-medium text-[#464265]">
                  Disponibilidad
                </h2>
                <div className="flex w-full items-center justify-between py-6 md:justify-evenly">
                  {schedules &&
                    schedules.map((schedule: Schedule) => (
                      <div key={schedule.value}>
                        <input
                          onChange={onChangeHours}
                          type="radio"
                          id={schedule.value}
                          name="available"
                          value={schedule.value}
                          className="peer hidden"
                        />
                        <label
                          htmlFor={schedule.value}
                          className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-[#5F81FF] text-[10px] peer-checked:bg-[#C9E6FD] peer-disabled:border-[#B5B5B5] peer-disabled:bg-transparent peer-disabled:text-[#B5B5B5] lg:h-24 lg:w-36 lg:text-sm"
                        >
                          <span className="flex items-center justify-center text-xl">
                            {schedule.icon}
                          </span>
                          <p className="font-bold">{schedule.name}</p>
                          <p>{schedule.hours}</p>
                        </label>
                      </div>
                    ))}
                </div>
                <button
                  onClick={onClickReservation}
                  className="h-14 w-full rounded-xl bg-[#5F81FF] px-4 text-base font-medium text-white disabled:bg-[#D4D3F1]"
                >
                  Reservar
                </button>
              </div>
            ) : null}
          </div>

          <div
            className={`${
              viewsStates.showNextStep ? "flex" : "hidden"
            } h-full max-h-full w-full flex-col gap-6`}
          >
            <h2 className="font-bold text-[#464265]">Detalles</h2>
            <div className="mt-6 flex w-full flex-col gap-3">
              <label htmlFor="amenity">Espacio</label>
              <input
                id="amenity"
                disabled
                className="h-12 w-full rounded-md bg-[#F9F2FF] placeholder:pl-3 placeholder:font-medium placeholder:text-black"
                placeholder={nextStepData.name}
              />
              <label htmlFor="date">Fecha</label>
              <input
                id="date"
                disabled
                className="h-12 w-full rounded-md bg-[#F9F2FF] placeholder:pl-3 placeholder:font-medium placeholder:capitalize placeholder:text-black"
                placeholder={nextStepData.reservationDate}
              />
              <label htmlFor="hour">Horario</label>
              <input
                id="hour"
                disabled
                className="h-12 w-full rounded-md bg-[#F9F2FF] placeholder:pl-3 placeholder:font-medium placeholder:text-black"
                placeholder={nextStepData.turn}
              />
            </div>
            <div className="mt-auto flex w-full justify-between gap-3 xl:mb-14">
              <button
                onClick={onClose}
                className="h-14 w-full rounded-xl border-2 border-[#D2736B] font-medium text-[#D2736B]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                onClick={onClickConfirm}
                className="w-full rounded-xl bg-[#5F81FF] text-white"
              >
                Confirmar
              </button>
            </div>
          </div>
          <SuccessView nextStepData={nextStepData} onClose={onClose} viewsStates={viewsStates} />
        </form>
      </div>
    </div>
  );
};

export default AmenitiesInfo;

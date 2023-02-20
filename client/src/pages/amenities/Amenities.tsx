import { successIcon, leftArrow } from "../../assets/amenitiesIcons/index";
import {
  BsFillSunFill,
  BsFillSunriseFill,
  BsFillMoonFill,
  BsXLg,
} from "react-icons/bs";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "./styles.css";
import { useGetReservation } from "../../hooks/useAmenity";
import axios from "axios";
import {
  reservationAmenity,
  reservationMonth,
  reservationNumberDay,
  reservationTurn,
} from "./helpers";
import { amenities, reservationReponse } from "./data";

export type Schedule = {
  icon: JSX.Element;
  name: string;
  hours: string;
  value: string;
};

type Reservation = {
  name: string | "GRILL" | "SWPOOL" | "GYM" | "TENNIS" | "LOUNGE";
  reservationDate: Date | null;
  turn: string | "MORNING" | "AFTERNOON" | "NIGHT";
};

type NextStepData = {
  name: string;
  reservationDate: string;
  turn: string;
};

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

const AmenitiesInfo = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showNextStep, setShowNextStep] = useState(false);
  const [showSuccessView, setShowSuccessView] = useState(false);
  const [showTurns, setShowTurns] = useState(false);
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
    setShowTurns(true);
  };

  const onChangeSelectAmenity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetReservationData((prev) => ({ ...prev, name: e.target.value }));
    SetNextStepData((prev) => ({
      ...prev,
      name: e.target.selectedOptions[0].innerText,
    }));
    setShowCalendar(true);
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
    setShowNextStep(true);
    console.log(reservationData);
    console.log(nextStepData);
  };

  const onClickConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowNextStep(false);
    setShowSuccessView(true);
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    SetReservationData(initStateReservationData);
    setShowCalendar(false);
    setShowSuccessView(false);
    setShowNextStep(false);
    setShowTurns(false);
  };

  // const {data: reservations} = useGetReservation()

  return (
    <div className="flex h-full w-full flex-col gap-6 px-6 pb-6 1048:flex-row">
      <div className="flex w-full flex-col items-stretch gap-6 lg:max-w-xl 2xl:max-w-full">
        <div className="w-full rounded-2xl bg-white py-4 px-6">
          <h2 className="mb-3 text-2xl font-semibold">Espacios comunes</h2>
          <div className=" mx-auto flex w-full items-center justify-between gap-2 overflow-auto overscroll-auto py-5 xl:gap-7">
            {amenities &&
              amenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className={`flex min-h-[6rem] min-w-[6rem] flex-col items-center  justify-center gap-2 rounded-2xl border-2 bg-transparent xl:h-[9rem] xl:w-[8rem] border-${amenity.bgColor}`}
                >
                  <img
                    className={`bg-${amenity.color} w-10 rounded-md p-1`}
                    src={amenity.icon}
                    alt={amenity.name}
                  />
                  <p className="text-xs font-bold xl:text-sm">{amenity.name}</p>
                </div>
              ))}
          </div>
          <div>
            <h2 className="my-3 text-base font-bold">Reglas de uso</h2>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum, totam voluptatibus saepe amet non
              tenetur consectetur eveniet nesciunt.
            </p>
            <p className="mt-3 text-sm font-normal  text-background-blue">
              Descargar reglamento
            </p>
          </div>
        </div>
        <div className="h-full  rounded-2xl bg-white py-4 px-6 ">
          <h2 className="mb-3 text-2xl font-semibold">Mis reservas</h2>
          <div className="flex max-h-96 flex-col gap-2 overflow-scroll">
            {reservationReponse.length > 0 ? (
              reservationReponse.map((reservation) => (
                <div
                  key={reservation.reservationDate}
                  className="flex w-full items-center justify-start gap-6 rounded-2xl bg-[#F4F5FA] px-3 py-2 font-Poppins"
                >
                  <div className="w-16 bg-white text-center">
                    <h3 className="text-3xl font-semibold">
                      {reservationNumberDay(reservation.reservationDate)}
                    </h3>
                    <p className="text-sm font-normal capitalize">
                      {reservationMonth(reservation.reservationDate)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold">
                      {reservationAmenity(reservation.name)}
                    </h3>
                    <p className="text-sm font-normal text-[#6F6F6F]">
                      {reservationTurn(reservation.tunr)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-10 text-center text-[#BABABA]">
                No tienes ninguna reserva en tu calendario
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="h-full w-full rounded-2xl bg-white py-4 px-6">
        <h2
          className={`${
            showSuccessView ? "hidden" : "flex"
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
              showNextStep || showSuccessView ? "hidden" : "flex"
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
            {showCalendar ? (
              <Calendar
                calendarType="US"
                onChange={changeDate}
                value={date}
                onClickDay={onClickDay}
              />
            ) : null}
            {showTurns ? (
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
              showNextStep ? "flex" : "hidden"
            } h-full max-h-full w-full flex-col gap-6`}
          >
            <h2 className="font-bold text-[#464265]">Detalles</h2>
            <div className="mt-6 flex w-full flex-col gap-3">
              <label htmlFor="amenity">Espacio</label>
              <input
                id="amenity"
                className="h-12 w-full rounded-md bg-[#F9F2FF] placeholder:pl-3 placeholder:font-medium placeholder:text-black"
                placeholder={nextStepData.name}
              />
              <label htmlFor="date">Fecha</label>
              <input
                id="date"
                className="h-12 w-full rounded-md bg-[#F9F2FF] placeholder:pl-3 placeholder:font-medium placeholder:capitalize placeholder:text-black"
                placeholder={nextStepData.reservationDate}
              />
              <label htmlFor="hour">Horario</label>
              <input
                id="hour"
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
          <div className=" hidden h-full max-h-full w-full flex-col gap-6"></div>
          <div
            className={`${
              showSuccessView ? "flex" : "hidden"
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
              <h3 className="text-lg font-medium text-[#464265]">
                {nextStepData.reservationDate}
              </h3>
              <p className="text-sm font-normal text-[#464265]">Horario</p>
              <h3 className="text-lg font-medium text-[#464265]">
                {nextStepData.turn}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="hidden xl:block"
                src={leftArrow}
                alt="left arrow"
              />
              <p className="hidden text-sm font-normal text-[#ABABAB] xl:block">
                Puedas verla aquí al lado
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-sm font-bold text-[#5F81FF]"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AmenitiesInfo;

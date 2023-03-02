import { useDispatch } from "react-redux";
import "../pages/message/classMessage.css";
import { comu } from "../store/messageReducer/message";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
interface dataTypes {
  subject: string;
  userName: string;
  message: string;
}

export default function Message(data: dataTypes) {
  console.log(data);
  const { subject, userName, message } = data;
  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex w-[100%] gap-1">
        <div
          className={`
        min-h-[5rem]
        sm:w-[90%]
        sm:rounded-[28px]
        sm:bg-[#5f82ff49]
        lg:bg-white
        ${
          subject === "Votacion-Activa"
            ? "lg:border-l-[.7rem] lg:border-l-[#4F3FF0]"
            : ""
        } relative py-4 pl-4 lg:rounded-2xl lg:border-2 lg:border-solid lg:border-gray`}
        >
          <div
            className={`inline justify-center rounded-[2rem]   p-1 px-2 lg:border-2 ${subject}`}
          >
            <span className="">{subject}</span>
          </div>
          <h3 className="b-1 py-2 font-normal text-[1] text-black sm:hidden lg:block">
            De: {userName}
          </h3>
          <p className="break-words pr-1 text-sm font-normal text-[#6F6F6F]">
            {message}
          </p>
        </div>
      </div>
      {/* <div className="flex gap-4 pl-6">
        <button className="flex h-[2.5rem] min-w-[6rem] items-center justify-center self-start rounded-[.5rem] bg-[#C9E6FD] pl-2 pr-2">
          <TiArrowLeft style={{ fontSize: "2rem" }} /> Responder
        </button>
        <button className="flex h-[2.5rem] min-w-[6rem] items-center justify-center self-start rounded-[.5rem] bg-[#C9E6FD] pl-2 pr-2">
          <TiArrowRight style={{ fontSize: "2rem" }} /> Reenviar
        </button>
      </div> */}
    </div>
  );
}

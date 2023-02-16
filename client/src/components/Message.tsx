import { useDispatch } from "react-redux";
import "../pages/message/classMessage.css";
import { comu } from "../store/messageReducer/message";
interface dataTypes {
  type: string;
  from: string;
  message: string;
}

export default function Message(data: dataTypes) {
  const { type, from, message } = data;
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        type === "Votacion-Activa" ? "border-l-[.7rem] border-l-[#4F3FF0]" : ""
      } relative rounded-2xl border-2 border-solid border-gray py-4 pl-4`}
    >
      <div
        className={`inline justify-center rounded-[2rem]   border-2 p-1 px-2 ${type}`}
      >
        <span className="">{type}</span>
      </div>
      <h3 className="b-1 py-2 font-normal text-[1] text-black">De: {from}</h3>
      <p className="text-sm font-normal text-[#6F6F6F]">{message}</p>
      <button
        className="absolute top-1 right-3 text-[1.3rem]"
        onClick={() => dispatch({ type: comu, payload: "testing" })}
      >
        :
      </button>
    </div>
  );
}

import React from "react";
import { useAuth } from "../../context/authContext";
import jwt_decode from "jwt-decode";
import { getURLComplement } from "../../service/urlComplements";
import { toast } from "react-toastify";
import { MenssageSchema } from "../../models/Message";
const MessageSend = () => {
  const { checkUserToken } = useAuth();
  const decoded: any = jwt_decode(checkUserToken);
  const apiURL: string = import.meta.env.VITE_API_BASE_URL;

  const SendMessage = async (e: any) => {
    e.preventDefault();
    const messageValue: string = e.target.message.value.trim();
    const selectValue: string = e.target.selecType.value;
    const user: string = decoded?.sub;
    if (messageValue === "") {
      toast.warn("Ingresa un mensaje");
      return;
    } else if (messageValue.length < 10) {
      toast.warn("El mensaje debe tener al menos 100 caracteres");
      return;
    }

    if (selectValue === "") {
      toast.warn("Ingresa el tipo de mensaje");
      return;
    }

    const dataMessage: MenssageSchema = {
      type: selectValue,
      from: user || "Unknown",
      message: messageValue,
    };
    console.log(dataMessage);
    // axios.post("/messages/")({});
  };
  return (
    <div className="relative flex h-[30%] items-end">
      <form
        className="relative h-[100%] w-[90%] rounded-2xl border-2 border-solid border-gray bg-white"
        action=""
        onSubmit={SendMessage}
      >
        <textarea
          name="message"
          id="message"
          className="min-h-full w-full rounded-2xl py-2 pl-4 pb-10 text-[1rem] outline-none"
        ></textarea>
        <select
          value={"Tipo de mensaje"}
          name="selecType"
          id="selectType"
          className="absolute bottom-4 left-[8rem] rounded-[1rem] bg-[#C9E6FD] p-2 "
        >
          <option key={0} value="Tipo de mensaje" disabled>
            Tipo de mensaje
          </option>
          <option key={1} value="Votacion-Activa">
            Votacion Activa
          </option>
          <option key={2} value="Comunicacion">
            Comunicacion
          </option>
          <option key={3} value="Reparacion">
            Reparacion
          </option>
        </select>

        <button className="absolute ml-1 h-[2rem] w-[2rem] rounded-[50%] bg-[#fafafa] text-center sm:inline lg:hidden">
          {">"}
        </button>
        <button className="absolute bottom-2 left-6 h-[3rem] w-[5rem] rounded-[1rem] bg-[#C9E6FD] sm:hidden lg:inline">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default MessageSend;

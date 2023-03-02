import React from "react";
import { useAuth } from "../../context/authContext";
import jwt_decode from "jwt-decode";
import { getURLComplement } from "../../service/urlComplements";
import { toast } from "react-toastify";
import { MenssageSchema } from "../../models/Message";
import axios from "axios";
import { postRequest } from "../../service/httpRequest";
const MessageSend = ({ setPost }) => {
  const { checkUserToken } = useAuth();
  const decoded: any = jwt_decode(checkUserToken);
  const apiURL: string = import.meta.env.VITE_API_BASE_URL;
  const urlSendMessage = getURLComplement().messagesSend();
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

    if (selectValue === "Tipo de mensaje") {
      toast.warn("Ingresa el tipo de mensaje");
      return;
    }
    console.log(user);

    const dataMessage: MenssageSchema = {
      subject: selectValue,
      userName: user || "Unknown",
      message: messageValue,
    };
    console.log(dataMessage);
    try {
      postRequest(dataMessage, urlSendMessage);
      toast.success("Mensaje enviado.");
      setPost(true);
    } catch (error) {
      toast.error("Ha ocurridop un error en el servido, vuelve a intentarlo.");
    }
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
          name="selecType"
          id="selectType"
          className="absolute bottom-4 left-[8rem] rounded-[1rem] bg-[#C9E6FD] p-2 "
        >
          <option key={0} value="Tipo de mensaje" disabled selected>
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

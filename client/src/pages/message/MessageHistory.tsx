import React, { useEffect, useState } from "react";
import Message from "../../components/Message";
import axios from "axios";
import { useQuery } from "react-query";
import message from "../../store/messageReducer/message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageSend from "./MessageSend";
import { getURLComplement } from "../../service/urlComplements";
import { getRequest } from "../../service/httpRequest";
import { useGetMessages } from "./useMessage";

export default function MessageHistory() {
  const [postReady, setPost] = useState(false);
  const apiURL: string = import.meta.env.VITE_API_BASE_URL;
  const urlGetMessages = getURLComplement().messagesGetAll();
  useEffect(() => {
    if (postReady === false) {
      console.log(postReady);
      refetch();
      setPost(false);
    }
  }, [postReady]);
  const { data, isLoading, refetch } = useGetMessages();

  console.log(Array.isArray(data));
  console.log(data);
  const dataEjemplo = {
    subject: "Votacion-Activa",
    userName: "Nahuel",
    message: "Reunion de vecinos a las 16hrs",
  };
  const dataEjemplo2 = {
    subject: "Comunicacion",
    userName: "Alberto",
    message: "Reunion de vecinos a las 16 hrs",
  };
  const dataEjemplo3 = {
    subject: "Reparacion",
    userName: "Rodrigo",
    message: "Necesito ayuda para reparar mi puerta",
  };
  return (
    <>
      <div className="flex h-[80vh] w-[90%] flex-col justify-between overflow-y-hidden py-2 pl-4">
        <div className=" h-[65%] w-[90%] overflow-y-scroll rounded-2xl border-none bg-white py-4 px-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Mensajes y Comunicaciones
          </h2>
          <div className="flex flex-col gap-y-5 ">
            <Message {...dataEjemplo} />
            <Message {...dataEjemplo2} />
            <Message {...dataEjemplo3} />
          </div>
        </div>
        <MessageSend setPost={setPost} />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}

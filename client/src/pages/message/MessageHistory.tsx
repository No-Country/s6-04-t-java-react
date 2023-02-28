import React from "react";
import Message from "../../components/Message";
import axios from "axios";
import { useQuery } from "react-query";
import dataMessage from "./data.json";
import message from "../../store/messageReducer/message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageSend from "./messageSend";

export default function MessageHistory() {
  // console.log(getURLComplement().messagesByMessageId());
  // const fetching = () => {
  //   return axios.get();
  // };
  // const { isLoading, data, error, isError, isFetching, refetch } = useQuery(
  //   "messages",
  //   fetching
  // );

  // console.log(dataMessage);

  return (
    <>
      <div className="flex h-[80vh] w-[90%] flex-col justify-between overflow-y-hidden py-2 pl-4">
        <div className=" h-[65%] w-[90%] overflow-y-scroll rounded-2xl border-none bg-white py-4 px-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Mensajes y Comunicaciones
          </h2>
          <div className="flex flex-col gap-y-5 ">
            {/* <Message by={objMenssage.by} clase="Reparacion" />
          <Message by={objMenssage.by} clase="Comunicacion" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
          <Message by={objMenssage.by} clase="Votacion-Activa" /> */}
            {dataMessage.messages.map((message, i) => {
              return (
                <Message
                  key={i}
                  type={message.type}
                  from={message.message}
                  message={message.message}
                />
              );
            })}
          </div>
        </div>
        <MessageSend />
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

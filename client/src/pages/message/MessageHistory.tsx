import React from "react";
import Message from "../../components/Message";
import axios from "axios";
import { useQuery } from "react-query";
import dataMessage from "./data.json";
import message from "../../store/messageReducer/message";

export default function MessageHistory() {
  const objMenssage = {
    by: "admin",
  };
  // const fetching = () => {
  //   return axios.get();
  // };
  // const { isLoading, data, error, isError, isFetching, refetch } = useQuery(
  //   "messages",
  //   fetching
  // );
  console.log(dataMessage);

  return (
    <div className="flex h-[80vh] w-[90%] justify-center overflow-y-hidden pl-4">
      <div className=" h-[100%] w-[90%] overflow-y-scroll rounded-2xl border-none bg-white py-4 px-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Mensajes y Comunicaciones
        </h2>
        <div className="flex flex-col gap-y-5 ">
          {/* <Message by={objMenssage.by} clase="Reparacion" />
          <Message by={objMenssage.by} clase="Comunicacion" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
          <Message by={objMenssage.by} clase="Votacion-Activa" /> */}
          {dataMessage.messages.map((message) => {
            return (
              <Message
                type={message.type}
                from={message.message}
                message={message.message}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

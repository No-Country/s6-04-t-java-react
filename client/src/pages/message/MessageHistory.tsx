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
      <div className="relative flex h-[30%] items-end">
        <form
          className="relative h-[100%] w-[90%] rounded-2xl border-2 border-solid border-gray bg-white"
          action=""
        >
          <textarea
            name=""
            id=""
            className="h-full w-full rounded-2xl py-2 pl-4 text-[1rem] outline-none"
          ></textarea>
        </form>

        <button className="ml-1 h-[2rem] w-[2rem] rounded-[50%] bg-[#fafafa] text-center sm:inline lg:hidden ">
          S
        </button>
        <button className="absolute bottom-2 left-6 h-[3rem] w-[5rem] rounded-[1rem] bg-[#C9E6FD] sm:hidden lg:inline">
          Enviar
        </button>
      </div>
    </div>
  );
}

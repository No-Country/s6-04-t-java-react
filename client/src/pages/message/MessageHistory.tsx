import React from "react";
import Message from "../../components/Message";

export default function MessageHistory() {
  const objMenssage = {
    by: "admin",
  };
  return (
    <div className="flex h-[80vh] w-[90%] justify-center overflow-y-hidden pl-4">
      <div className=" h-[100%] w-[90%] overflow-y-scroll rounded-2xl border-none bg-white py-4 px-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Mensajes y Comunicaciones
        </h2>
        <div className="flex flex-col gap-y-5 ">
          <Message by={objMenssage.by} clase="Reparacion" />
          <Message by={objMenssage.by} clase="Comunicacion" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
          <Message by={objMenssage.by} clase="Votacion-Activa" />
        </div>
      </div>
    </div>
  );
}

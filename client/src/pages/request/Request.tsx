import { useForm, SubmitHandler } from "react-hook-form";
import RequestList from "./RequestList";

type FormValues = {
  createRequest: string;
  areaRequest: string;
  descriptionRequest: string;
};

function Request() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  
  return (
    <div className=" flex h-full w-full flex-col gap-y-4 1048:grid 1048:grid-cols-2 1048:gap-x-6 1048:p-6">
      <div className="h-full  max-w-2xl rounded-3xl bg-white px-6">
        <h2 className="my-6 text-3xl font-semibold text-[#464265]">
          Realizar un reporte
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h3 className="mb-3 text-base font-bold">Qué deseas hacer?</h3>
            <select
              className="w-full rounded-lg border border-reporte-borderColor p-3 text-sm font-bold text-reporte-textColor"
              {...register("createRequest")}
            >
              <option value="Solicitar reparacion">Elige una opción</option>
              <option value="Solicitar reparacion">
                Solicitar una reparación
              </option>
              <option value="Crear reporte">Crear reporte</option>
              <option value="Objeto encontrado/perdido">
                Objeto encontrado/perdido
              </option>
            </select>
          </div>
          <div className="mb-6">
            <h3 className="mb-3 text-base font-bold">
              Sobre qué unidad/espacio?
            </h3>
            <select
              className="w-full rounded-lg border border-reporte-borderColor p-3 text-sm font-bold text-reporte-textColor"
              {...register("areaRequest")}
            >
              <option value="mi-unidad">Mi unidad</option>
              <option value="Quincho">Quincho</option>
              <option value="Alberca">Alberca</option>
              <option value="Asador">Asador</option>
              <option value="Gimnasio">Gimnasio</option>
              <option value="otro">otro</option>
            </select>
          </div>
          <div className=" flex flex-col">
            <h3 className="mb-3 text-base font-bold">Observaciones</h3>
            <textarea
              rows={6}
              className="mb-6 rounded-lg border border-reporte-borderColor p-3"
              placeholder="Nos puedes brindar más detalles?"
              {...register("descriptionRequest", {})}
            />
            <button
              className="mt-20 mb-10 w-full rounded-lg bg-zinc-400 py-4 text-2xl font-semibold text-white"
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
      <RequestList />
    </div>
  );
}

export default Request;

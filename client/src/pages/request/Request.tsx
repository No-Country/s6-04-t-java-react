import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useCreateReport } from "../../hooks/useRequest";
import { Report } from "../../models/Requests";
import ErrorView from "../amenities/ErrorView";
import { options, places } from "./data";
import RequestList from "./RequestList";
import SuccessReport from "./SuccessReport";

function Request() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<Report>({mode: 'onChange', defaultValues: {detail: '', issue: ''}});
  const [viewsStates, setViewsStates] = useState({
    showErrorView: false,
    showSuccessView: false,
  })

  const queryClient = useQueryClient()

  const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setViewsStates((prev) => ({ ...prev, showSuccessView: false, showErrorView: false}))
  };


  const onSuccess = () => {
    queryClient.invalidateQueries(['getReports'])
    setViewsStates((prev) => ({ ...prev, showSuccessView: true}))
    reset()
  }
  const onError = () => {
    setViewsStates((prev) => ({ ...prev, showErrorView: true }))
  }

  const { mutate, isLoading } = useCreateReport(onSuccess, onError);

  const onSubmit: SubmitHandler<Report> = (data) => {
    mutate(data);
  };
  
  return (
    <div className=" flex h-full w-full flex-col gap-y-4 1048:grid 1048:grid-cols-2 1048:gap-x-6 1048:p-6">
      <div className="h-full max-w-2xl rounded-3xl bg-white p-6">
        <h2 className={`${viewsStates.showErrorView || viewsStates.showSuccessView ? 'hidden' : 'block'} my-6 text-3xl font-semibold text-[#464265]`}>
          Realizar un reporte
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className={`${viewsStates.showErrorView || viewsStates.showSuccessView ? 'hidden' : 'block'}`}>
          <div className="mb-6">
            <h3 className="mb-3 text-base font-bold">Qué deseas hacer?</h3>
            <select
              className="w-full rounded-lg border border-reporte-borderColor p-3 text-sm font-bold text-reporte-textColor"
              {...register("issue")}
            >
              <option value="" disabled>Elige una opción</option>
              {options && options.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <h3 className="mb-3 text-base font-bold">
              Sobre qué unidad/espacio?
            </h3>
            <select
              className="w-full rounded-lg border border-reporte-borderColor p-3 text-sm font-bold text-reporte-textColor"
              {...register("place")}
            >
              {places && places.map((place) => (
                <option key={place.id} value={place.id}>{place.name}</option>
              ))}
            </select>
          </div>
          <div className=" flex flex-col">
            <h3 className="mb-3 text-base font-bold">Observaciones</h3>
            <textarea
              rows={6}
              className="mb-6 rounded-lg border border-reporte-borderColor p-3"
              placeholder="Nos puedes brindar más detalles?"
              {...register("detail", { required: true})}
            />
            <button
              className="mt-20 mb-10 w-full rounded-lg bg-[#5F81FF] py-4 text-2xl font-semibold text-white disabled:bg-gray"
              type="submit"
              disabled={!isValid}
            >
              {isLoading ? 'Cargando...' : 'Confirmar Reporte'}
            </button>
          </div>
        </form>
        <SuccessReport onClose={onClose} viewsStates={viewsStates} />
        <ErrorView onClose={onClose} viewsStates={viewsStates} title='Error' description='Hubo un error al crear el reporte, intente nuevamente.' />
      </div>
      <RequestList />
    </div>
  );
}

export default Request;

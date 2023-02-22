import { amenities } from "./data"

const CommonSpaces = () => {
  return (
    <div className="w-full rounded-2xl bg-white py-4 px-6">
          <h2 className="mb-3 text-2xl font-semibold">Espacios comunes</h2>
          <div className=" mx-auto flex w-full items-center justify-between gap-2 overflow-auto overscroll-auto py-5 xl:gap-7">
            {amenities &&
              amenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className={`flex min-h-[6rem] min-w-[6rem] flex-col items-center  justify-center gap-2 rounded-2xl border-2 bg-transparent xl:h-[9rem] xl:w-[8rem] border-${amenity.bgColor}`}
                >
                  <img
                    className={`bg-${amenity.color} w-10 rounded-md p-1`}
                    src={amenity.icon}
                    alt={amenity.name}
                  />
                  <p className="text-xs font-bold xl:text-sm">{amenity.name}</p>
                </div>
              ))}
          </div>
          <div>
            <h2 className="my-3 text-base font-bold">Reglas de uso</h2>
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis earum, totam voluptatibus saepe amet non
              tenetur consectetur eveniet nesciunt.
            </p>
            <p className="mt-3 text-sm font-normal  text-background-blue">
              Descargar reglamento
            </p>
          </div>
        </div>
  )
}
export default CommonSpaces
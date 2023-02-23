import { amenities } from "./data"

const CommonSpaces = () => {
  return (
    <div className="w-full rounded-2xl bg-white py-4 px-6">
          <h2 className="mb-3 text-2xl font-semibold">Espacios comunes</h2>
          <div className=" mx-auto flex w-full items-center justify-evenly xl:justify-between xl:flex-nowrap flex-wrap gap-2 overscroll-auto scroll-smooth overflow-x-scroll py-5 xl:gap-2 1440:gap-3">
            {amenities &&
              amenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className={`flex min-h-[6rem] min-w-[5.5rem] flex-col items-center justify-center gap-2 rounded-2xl border-2 bg-transparent xl:h-[7rem] xl:w-[8rem] border-${amenity.bgColor}`}
                >
                  <img
                    className={`bg-${amenity.color} w-10 rounded-md p-1`}
                    src={amenity.icon}
                    alt={amenity.name}
                  />
                  <p className="text-[10px] font-bold xl:text-xs">{amenity.name}</p>
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
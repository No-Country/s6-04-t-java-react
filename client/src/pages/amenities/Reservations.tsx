import { ReservationList } from "../../models/Amenities"

const reservationTurn = (turn: string) => {
    switch (turn) {
        case 'MORNING':
        return 'Turno mañana - 09:00 - 13:00'

        case 'AFTERNOON':
        return 'Turno tarde - 14:00 - 18:00'

        case 'NIGHT':
        return 'Turno noche - 20:00 - 00:00'

        default:
        break;
    }
}

const reservationAmenity = (amenity: string) => {

    switch (amenity) {
        case 'SWPOOL':
        return 'Piscina'

        case 'GYM':
        return 'Gimnasio'

        case 'GRILL':
        return 'Quincho'

        case 'TENNIS':
        return 'Cancha Tenis'

        case 'LOUNGE':
        return 'Sauna'

        default:
        break;
    }

}

type Props = {
  reservations: ReservationList
  isLoading: boolean
}


const Reservations = ({reservations, isLoading}: Props) => {

const reservationMonth = (date: string) => {
    const turnToDate = new Date(date)
    const shortedMonth = turnToDate.toLocaleDateString("es-ES", {month: "short"})
    return shortedMonth
    }
    
const reservationNumberDay = (date: string) => {
    const turnToDate = new Date(date)
    const numberDay = turnToDate.toLocaleDateString("es-ES", {day: "numeric"})
    return numberDay
    }

  return (
    <div className="h-full  rounded-2xl bg-white py-4 px-6 ">
          <h2 className="mb-3 text-2xl font-semibold">Mis reservas</h2>
          <div className="custom-scroll-bar flex max-h-96 flex-col gap-2">
            {isLoading ?
             <div className="text-center mt-3">Cargando...</div>
            :
            <div style={{height:"215px"}}>
            {reservations ? (
              reservations.map((reservation) => (
                <div
                  key={reservation.reservationDate + reservation.reservationId}
                  className="flex w-full items-center justify-start gap-6 rounded-2xl bg-[#F4F5FA] px-3 py-2 font-Poppins"
                  >
                  <div className="w-16 bg-white text-center">
                    <h3 className="text-3xl font-semibold">
                      {reservationNumberDay(reservation.reservationDate)}
                    </h3>
                    <p className="text-sm font-normal capitalize">
                      {reservationMonth(reservation.reservationDate)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold">
                      {reservationAmenity(reservation.name)}
                    </h3>
                    <p className="text-sm font-normal text-[#6F6F6F]">
                      {reservationTurn(reservation.turn)}
                    </p>
                  </div>
                </div>
              ))
              ) : (
                <p className="mt-10 text-center text-[#BABABA]">
                No tienes ninguna reserva en tu calendario
              </p>
            )}
            </div>
            }
          </div>
        </div>
  )
}
export default Reservations
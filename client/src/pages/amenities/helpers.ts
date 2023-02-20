export const reservationMonth = (date: string) => {
    const turnToDate = new Date(date)
    const shortedMonth = turnToDate.toLocaleDateString("es-ES", {month: "short"})
    return shortedMonth
  }

export  const reservationNumberDay = (date: string) => {
    const turnToDate = new Date(date)
    const numberDay = turnToDate.toLocaleDateString("es-ES", {day: "numeric"})
    return numberDay
  }

 export const reservationTurn = (turn: string) => {
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

 export const reservationAmenity = (amenity: string) => {

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
export type Schedule = {
    icon: JSX.Element;
    name: string;
    hours: string;
    value: string;
  };
  
  export type Schedules = Schedule[];

  export type ReservationResponse = {
    name: string | "GRILL" | "SWPOOL" | "GYM" | "TENNIS" | "LOUNGE";
    reservationDate: string 
    tunr: string | "MORNING" | "AFTERNOON" | "NIGHT";
    reservationID?: number
  };

  export type ReservationList = ReservationResponse[];

  export type Reservation = {
    name: string | "GRILL" | "SWPOOL" | "GYM" | "TENNIS" | "LOUNGE";
      reservationDate: Date | null 
      turn: string | "MORNING" | "AFTERNOON" | "NIGHT";
  }


  
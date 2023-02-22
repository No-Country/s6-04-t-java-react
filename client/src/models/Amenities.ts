export type Schedule = {
    icon: JSX.Element;
    name: string;
    hours: string;
    value: string;
  };
  
  export type Schedules = Schedule[];

  export type Reservation = {
    name: string | "GRILL" | "SWPOOL" | "GYM" | "TENNIS" | "LOUNGE";
    reservationDate: Date | null;
    turn: string | "MORNING" | "AFTERNOON" | "NIGHT";
  };

  
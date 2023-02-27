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
    turn: string | "MORNING" | "AFTERNOON" | "NIGHT";
    reservationId?: number
  };

  export type ReservationList = ReservationResponse[];

  export type Reservation = {
    name: string | "GRILL" | "SWPOOL" | "GYM" | "TENNIS" | "LOUNGE";
      reservationDate: string
      turn: string | "MORNING" | "AFTERNOON" | "NIGHT";
  }


  export type NextStepData = {
    name: string;
    reservationDate: string;
    turn: string;
  };
  
  export type ViewState = {
    showCalendar: boolean
    showNextStep: boolean
    showSuccessView: boolean
    showErrorView: boolean
    showTurns: boolean
  }
  
  
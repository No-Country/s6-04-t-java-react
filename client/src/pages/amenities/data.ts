import {
    swim,
    dumbbell,
    grill,
    tennis,
    yoga,
  } from "../../assets/amenitiesIcons/index";


export const reservationReponse = [
    {
    name: "GRILL",
    reservationDate: "2000-03-16",
    tunr: "MORNING"
  },
  {
    name: "SWPOOL",
    reservationDate: "2022-08-25",
    tunr: "NIGHT"
  },
  ]


export const amenities = [
    {
      name: "Piscina",
      id: "SWPOOL",
      color: "blue-swimming",
      bgColor: "background-swimming",
      icon: swim,
    },
    {
      name: "Gimnasio",
      id: "GYM",
      color: "background-blue",
      bgColor: "background-dumbbell",
      icon: dumbbell,
    },
    {
      name: "Quincho",
      id: "GRILL",
      color: "green-quincho",
      bgColor: "background-quincho",
      icon: grill,
    },
    {
      name: "Cancha tenis",
      id: "TENNIS",
      color: "green-tennis",
      bgColor: "background-tennis",
      icon: tennis,
    },
    {
      name: "Sauna",
      id: "LOUNGE",
      color: "sauna",
      bgColor: "background-sauna",
      icon: yoga,
    },
  ];
  
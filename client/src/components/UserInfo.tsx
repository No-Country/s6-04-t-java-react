import { RiNotification3Fill } from "react-icons/ri";

const houses = [
    { name: "House 1",
    id: 'house1'
    },
    { name: "House 2",
    id: 'house2'
    },
]

export default function UserInfo() {
  return (
    <div className="flex w-full items-center justify-between font-semibold  py-4 font-Poppins 1048:px-32">
      <h1 className="text-white lg:text-3xl">
        <span>Buen dia,</span> Emiliano
      </h1>
      <div className="flex items-center gap-6 justify-between p-2 xl:w-1/4">
        <RiNotification3Fill className="text-white mx-2 text-xl" />
        <select className="rounded-xl bg-transparent text-md font-normal text-white border-white border-2 p-3 w-3/4 focus:outline-none" name="house">
          {houses.map(house => (
              <option key={house.id} className="bg-background-blue" value={house.id}>{house.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

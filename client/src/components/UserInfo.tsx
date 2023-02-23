import { RiNotification3Fill } from "react-icons/ri";
import { useAuth } from "../context/authContext";
import jwt_decode from "jwt-decode";

const houses = [
  { name: "House 1", id: "house1" },
  { name: "House 2", id: "house2" },
];

const UserInfo = () => {
  const { checkUserToken } = useAuth();

  const decoded: any = jwt_decode(checkUserToken);

  return (
    <div className="flex w-full items-center justify-between py-4  font-Poppins font-semibold 1048:px-32">
      <h1 className="text-white lg:text-3xl">
        <span>Buen dia,</span> {decoded?.sub}
      </h1>
      <div className="flex items-center justify-between gap-6 p-2 xl:w-1/4">
        <RiNotification3Fill className="mx-2 text-xl text-white" />
        <select
          className="text-md w-3/4 rounded-xl border-2 border-white bg-transparent p-3 font-normal text-white focus:outline-none"
          name="house"
        >
          {houses.map((house) => (
            <option
              key={house.id}
              className="bg-background-blue"
              value={house.id}
            >
              {house.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default UserInfo;

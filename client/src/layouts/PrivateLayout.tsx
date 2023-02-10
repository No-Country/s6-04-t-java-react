import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, UserInfo } from "../components";
import { useAuth } from "../context/authContext";

const PrivateLayout = () => {
  const { isUserLogged } = useAuth();
  const navigate = useNavigate();

  if (!isUserLogged) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className="flex flex-col justify-center items-center">
          <div className="text-white font-bold text-4xl">No estás autorizado</div>
          <button className='bg-indigo-700 text-white font-bold text-lg py-3 px-6 rounded-full hover:bg-indigo-500 shadow-md my-2 disabled:opacity-50 disabled:bg-gray-700' onClick={() => navigate("/")}>Iniciar sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 font-Poppins 450:px-12 sm:px-[20%] 1048:grid 1048:grid-cols-5 1048:px-0">
      <Sidebar />
      <div className="flex flex-col  pb-8 1048:col-span-4">
        <header>Header</header>
        <UserInfo />
        <Outlet />
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default PrivateLayout;

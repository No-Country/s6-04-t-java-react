import { Outlet } from "react-router-dom";
import { Sidebar, UserInfo } from "../components";
import { useAuth } from "../context/authContext";
import { Login } from "../pages";
import Footer from "../components/Footer";

const PrivateLayout = () => {
  const { checkUserToken } = useAuth();

  if (!checkUserToken) {
    return <Login />;
  }

  return (
    <>
      <div className="px-6 font-Poppins 450:px-12 sm:px-[20%] 1048:grid 1048:grid-cols-5 1048:px-0">
        <Sidebar />
        <div className="flex flex-col  pb-8 1048:col-span-4">
          <UserInfo />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivateLayout;

import { useEffect } from "react";
import { RiBuilding4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { liveto } from "../../assets/iconslogin/index";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { isUserLogged, setIsUserLogged } = useAuth();

  useEffect(() => {
    if (isUserLogged) {
      navigate("/home");
    }
  }, []);

  const login = () => {
    setIsUserLogged(true);
    navigate("/home");
  };

  return (
    // <div className="1048:flex 1048:h-3/4 1048:justify-center items-center 1048:px-24">
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex">
        <div className="hidden 1048:block">
          <img className="h-80" src={liveto} alt="" />
        </div>
        <div className="rounded-r-2xl bg-white p-4">
          <h2 className="flex items-center justify-center gap-4  font-bold uppercase tracking-[4px]">
            <RiBuilding4Line className="text-[2.5rem]" />
            liveto
          </h2>
          <h3 className="mb-4">Log in</h3>
          <h3 className="mb-4">Ingresa a tu cuenta</h3>
          <form>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email">Correo electronico</label>
              <input
                className="rounded-md bg-medium-gray"
                type="email"
                placeholder="enter your email"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="password">Cotraseña</label>
              <input
                className="rounded-md bg-medium-gray"
                type="password"
                placeholder="********"
              />
            </div>
            <button
              onClick={login}
              className="w-full rounded-md bg-blue-swimming p-2 text-center"
              type="submit"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

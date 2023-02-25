import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { liveto, iconBuilding } from "../../assets/iconslogin/index";
import { useAuth } from "../../context/authContext";
import PrivateLayout from "../../layouts/PrivateLayout";
import { login } from "../../service/auth";
import { ErrorMessage } from "@hookform/error-message";

const Login = () => {
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const navigate = useNavigate();
  const { checkUserToken, isLoadingUser, setIsLoadingUser } = useAuth();

  useEffect(() => {
    if (checkUserToken) navigate("/home");
  }, [checkUserToken]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {},
  });

  if (checkUserToken) return <PrivateLayout />;

  const onSubmit = (data: any) => {
    login(data, setIsLoadingUser, setIsInvalidCredentials);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-100 flex">
        <div className="hidden 1048:block">
          <img src={liveto} alt="" width={"285px"} />
        </div>
        <div
          className="rounded-2xl bg-white p-4 sm:rounded-2xl md:rounded-2xl   xl:rounded-none xl:rounded-r-2xl"
          style={{ width: "270px", padding: "20px" }}
        >
          <div
            className="mt-2 mb-5 flex items-center justify-center gap-4 font-Poppins text-2xl font-bold uppercase tracking-[4px]"
            style={{ color: "#464265" }}
          >
            <img src={iconBuilding} width={"40px"} alt="" />
            liveto
          </div>
          <div
            className="text-1xl mb-1 font-Poppins font-bold"
            style={{ color: "#464265" }}
          >
            Log in
          </div>
          <div
            className="mt-2 mb-4 font-Poppins font-bold"
            style={{ color: "#464265", fontSize: "11px", lineHeight: "12px" }}
          >
            Ingresa a tu cuenta
          </div>
          <form>
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 font-Poppins"
                style={{
                  color: "#555555",
                  fontSize: "13px",
                  lineHeight: "13px",
                }}
              >
                Correo electrónico
              </label>
              <input
                className="h-7 rounded-md bg-medium-gray pl-2 text-xs"
                style={{ color: "#555555" }}
                type="email"
                placeholder="ejemplo@123.com"
                disabled={false}
                {...register("email" as never, {
                  required: "Debes ingresar un email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Debes ingresar el email en un formato correcto",
                  },
                  setValueAs: (v: string) => v?.trim(),
                  validate: (value: string) => {
                    return !!value?.trim();
                  },
                })}
              />
              <div
                className="mb-4 mt-1 h-4 font-Poppins text-red-500"
                style={{
                  width: "220px",
                  fontSize: "12px",
                  lineHeight: "13px",
                }}
              >
                <ErrorMessage
                  errors={errors}
                  name={"email" as never}
                  render={({ message }) => <span>{message}</span>}
                />
              </div>
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 font-Poppins "
                style={{
                  color: "#555555",
                  fontSize: "13px",
                  lineHeight: "13px",
                }}
              >
                Contraseña
              </label>
              <input
                className="h-7 rounded-md bg-medium-gray pl-2 text-xs"
                style={{ color: "#555555" }}
                type="password"
                placeholder="********"
                disabled={false}
                {...register("password" as never, {
                  required: "Debes ingresar una contraseña",
                  setValueAs: (v: string) => v?.trim(),
                  validate: (value: string) => {
                    return !!value?.trim();
                  },
                })}
              />
              <div
                className="mb-2 mt-1 h-4 font-Poppins text-red-500"
                style={{
                  width: "190px",
                  fontSize: "12px",
                  lineHeight: "13px",
                }}
              >
                <ErrorMessage
                  errors={errors}
                  name={"password" as never}
                  render={({ message }) => <span>{message}</span>}
                />
              </div>
              <div
                className="mb-1 h-4 font-Poppins text-red-500"
                style={{
                  width: "220px",
                  fontSize: "12px",
                  lineHeight: "13px",
                }}
              >
                {isInvalidCredentials &&
                  "Nombre de usuario y/o contraseña incorrectos"}
              </div>
            </div>
            <button
              onClick={() => handleSubmit(onSubmit)()}
              className="w-full rounded-md p-3 text-center font-Poppins text-xs"
              style={{ backgroundColor: "#605DCE", color: "#fff" }}
              type="button"
            >
              {isLoadingUser ? "Cargando..." : "Ingresar"}
            </button>
          </form>
          <div className="mt-6 mb-1 flex h-4 justify-center gap-2">
            <div
              className="font-Poppins"
              style={{
                fontSize: "10px",
                lineHeight: "11px",
              }}
            >
              ¿No tienes una cuenta?
            </div>
            <div
              className="cursor-pointer font-Poppins underline"
              style={{
                fontSize: "10px",
                lineHeight: "11px",
              }}
            >
              REGISTRARSE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

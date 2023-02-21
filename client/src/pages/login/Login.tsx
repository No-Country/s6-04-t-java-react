import { useEffect } from "react";
import { RiBuilding4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { liveto } from "../../assets/iconslogin/index";
import { useAuth } from "../../context/authContext";
import PrivateLayout from "../../layouts/PrivateLayout";
import { login } from "../../service/auth";
import { ErrorMessage } from "@hookform/error-message";

const Login = () => {
  const navigate = useNavigate();
  const { checkUserToken, isLoadingUser, setIsLoadingUser } = useAuth();

  useEffect(() => {
    if (checkUserToken) navigate("/home");
  }, [checkUserToken, isLoadingUser]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "all",
    defaultValues: {},
  });

  if (checkUserToken) return <PrivateLayout />;

  const onSubmit = (data: any) => {
    login(data, setIsLoadingUser);
  };

  return (
    // <div className="1048:flex 1048:h-3/4 1048:justify-center items-center 1048:px-24">
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex">
        <div className="hidden 1048:block">
          <img className="w-60" src={liveto} alt="" />
        </div>
        <div className="rounded-r-2xl bg-white p-4">
          <h2 className="flex items-center justify-center gap-4  font-bold uppercase tracking-[4px]">
            <RiBuilding4Line className="text-[2.5rem]" />
            liveto
          </h2>
          <h3 className="mb-4">Log in</h3>
          <h3 className="mb-3">Ingresa a tu cuenta</h3>
          <form>
            <div className="mb-1 flex flex-col">
              <label htmlFor="email">Correo electronico</label>
              <input
                className="rounded-md bg-medium-gray"
                type="email"
                placeholder="enter your email"
                name={"email"}
                disabled={false}
                {...register("email", {
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
                style={{
                  color: "red",
                  height: "30px",
                  width: "184px",
                  fontSize: "12px",
                  lineHeight: "14px",
                }}
              >
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => <span>{message}</span>}
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="password">Contraseña</label>
              <input
                className="rounded-md bg-medium-gray"
                type="password"
                placeholder="********"
                name={"password"}
                disabled={false}
                {...register("password", {
                  required: "Debes ingresar una contraseña",
                  setValueAs: (v: string) => v?.trim(),
                  validate: (value: string) => {
                    return !!value?.trim();
                  },
                })}
              />
              <div
                style={{
                  color: "red",
                  height: "30px",
                  width: "184px",
                  fontSize: "12px",
                  lineHeight: "14px",
                }}
              >
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => <span>{message}</span>}
                />
              </div>
            </div>
            <button
              onClick={() => handleSubmit(onSubmit)()}
              className="w-full rounded-md bg-blue-swimming p-2 text-center"
              type="button"
            >
              {isLoadingUser ? "loading..." : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { liveto, iconBuilding } from "../../assets/iconslogin/index";
import { useAuth } from "../../context/authContext";
import PrivateLayout from "../../layouts/PrivateLayout";
import { signUp } from "../../service/auth";
import { ErrorMessage } from "@hookform/error-message";
import { postRequest } from "../../service/httpRequest";

const SignUp = () => {
  const navigate = useNavigate();
  const { checkUserToken } = useAuth();
  const [isRegisteringUser, setIsRegisteringUser] = useState(false);
  const [userCreated, setUserCreated] = useState();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (checkUserToken) navigate("/home");
  }, [checkUserToken]);

  const triggerValidation = async () => {
    const output = await trigger();
    return output;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
    trigger,
  } = useForm({
    mode: "all",
    defaultValues: {},
  });

  if (checkUserToken) return <PrivateLayout />;

  const validateAndSubmit = () => {
    triggerValidation();
    if (
      getValues("password" as never) === getValues("confirmPassword" as never)
    ) {
      handleSubmit(onSubmit)();
    }
  };

  if (checkUserToken) return <PrivateLayout />;

  const onSubmit = (data: any) => {
    signUp(data, setUserCreated, setIsRegisteringUser, setIsError);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div
        className="rounded-2xl bg-white p-4"
        style={{ width: "370px", padding: "20px" }}
      >
        <div
          className="mt-1 mb-4 flex items-center justify-center gap-4 font-Poppins text-2xl font-bold uppercase tracking-[4px]"
          style={{ color: "#464265" }}
        >
          <img src={iconBuilding} width={"40px"} alt="" />
          liveto
        </div>
        {userCreated ? (
          <div
            className="mt-12 flex flex-col h-20 justify-center align-middle"
          >
            <div className="text-center text-lg">¡Usuario creado satisfactoriamente!</div>
            <div className="mt-5 mb-12 flex h-4 justify-center gap-2">
              <div
                className="text-xl cursor-pointer font-Poppins underline"
                onClick={() => navigate("/")}
              >
                INGRESAR
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="text-1xl mb-1 font-Poppins font-bold"
              style={{ color: "#464265" }}
            >
              Nueva cuenta
            </div>
            <div
              className="mt-1 mb-4 font-Poppins font-bold"
              style={{ color: "#464265", fontSize: "11px", lineHeight: "12px" }}
            >
              Si es tu primera vez aquí, crea tu cuenta
            </div>
            <form className="flex flex-col ">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Ingresa tu nombre
                  <input
                    className="mt-1 h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                    style={{ color: "#555555" }}
                    type="text"
                    placeholder="nombre"
                    {...register("firstName" as never, {
                      required: "Debes ingresar un nombre",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 caracteres",
                      },
                      setValueAs: (v: string) => v?.trim(),
                      validate: (value: string) => {
                        return !!value?.trim();
                      },
                    })}
                  />
                  <div
                    className="mt-1 h-4 font-Poppins text-red-500"
                    style={{
                      width: "320px",
                      fontSize: "12px",
                      lineHeight: "13px",
                    }}
                  >
                    <ErrorMessage
                      errors={errors}
                      name={"firstName" as never}
                      render={({ message }) => <span>{message}</span>}
                    />
                  </div>
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Ingresa tu apellido
                  <input
                    className="mt-1 h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                    style={{ color: "#555555" }}
                    type="text"
                    placeholder="apellido"
                    {...register("lastName" as never, {
                      required: "Debes ingresar un apellido",
                      minLength: {
                        value: 2,
                        message: "Mínimo 2 caracteres",
                      },
                      setValueAs: (v: string) => v?.trim(),
                      validate: (value: string) => {
                        return !!value?.trim();
                      },
                    })}
                  />
                  <div
                    className="mt-1 h-4 font-Poppins text-red-500"
                    style={{
                      width: "320px",
                      fontSize: "12px",
                      lineHeight: "13px",
                    }}
                  >
                    <ErrorMessage
                      errors={errors}
                      name={"lastName" as never}
                      render={({ message }) => <span>{message}</span>}
                    />
                  </div>
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Ingresa tu correo electronico
                  <input
                    className="mt-1 h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                    style={{ color: "#555555" }}
                    type="email"
                    placeholder="ejemplo@123.com"
                    {...register("email" as never, {
                      required: "Debes ingresar un correo electrónico",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:
                          "Debes ingresar el correo electrónico en un formato correcto",
                      },
                      setValueAs: (v: string) => v?.trim(),
                      validate: (value: string) => {
                        return !!value?.trim();
                      },
                    })}
                  />
                  <div
                    className="mb-2 mt-1 h-4 font-Poppins text-red-500"
                    style={{
                      width: "320px",
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
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="floor"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Ingresa tu piso
                  <input
                    className="mt-1 h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                    style={{ color: "#555555" }}
                    type="text"
                    placeholder="Ej. 5°B Flia Gonzales"
                    {...register("floor" as never, {
                      required: "Debes ingresar un piso",
                      minLength: {
                        value: 5,
                        message: "Mínimo 5 caracteres",
                      },
                      setValueAs: (v: string) => v?.trim(),
                      validate: (value: string) => {
                        return !!value?.trim();
                      },
                    })}
                  />
                  <div
                    className="mt-1 h-4 font-Poppins text-red-500"
                    style={{
                      width: "320px",
                      fontSize: "12px",
                      lineHeight: "13px",
                    }}
                  >
                    <ErrorMessage
                      errors={errors}
                      name={"floor" as never}
                      render={({ message }) => <span>{message}</span>}
                    />
                  </div>
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="apartmentNumber"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Ingresa tu número de apartamento
                  <input
                    className="mt-1 h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                    style={{ color: "#555555" }}
                    type="number"
                    min="1"
                    step="1"
                    onKeyDown={(evt) =>
                      (evt.key === "e" ||
                        evt.key === "." ||
                        evt.key === "," ||
                        evt.key === "-" ||
                        evt.key === "+") &&
                      evt.preventDefault()
                    }
                    {...register("apartmentNumber" as never, {
                      required: "Debes ingresar un número de apartamento",
                      validate: (value: number) => {
                        if (value <= 0) {
                          return "El número debe ser mayor o igual a 1";
                        }
                      },
                    })}
                  />
                  <div
                    className="mt-1 h-4 font-Poppins text-red-500"
                    style={{
                      width: "320px",
                      fontSize: "12px",
                      lineHeight: "13px",
                    }}
                  >
                    <ErrorMessage
                      errors={errors}
                      name={"apartmentNumber" as never}
                      render={({ message }) => <span>{message}</span>}
                    />
                  </div>
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Crea tu contraseña
                </label>
                <input
                  className="h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                  style={{ color: "#555555" }}
                  type="password"
                  placeholder="********"
                  {...register("password" as never, {
                    required: "Debes ingresar una contraseña",
                    minLength: {
                      value: 5,
                      message: "Mínimo 5 caracteres",
                    },
                    maxLength: {
                      value: 10,
                      message: "Máximo 10 caracteres",
                    },
                    setValueAs: (v: string) => v?.trim(),
                    validate: (value: string) => {
                      return !!value?.trim();
                    },
                  })}
                />
                <div
                  className="mt-1 h-4 font-Poppins text-red-500"
                  style={{
                    width: "190px",
                    fontSize: "12px",
                    lineHeight: "13px",
                  }}
                >
                  <ErrorMessage
                    errors={errors}
                    name={"password" as never}
                    render={({ message }) => <div>{message}</div>}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-1 font-Poppins"
                  style={{
                    color: "#555555",
                    fontSize: "13px",
                    lineHeight: "13px",
                  }}
                >
                  Repite tu contraseña
                </label>
                <input
                  className="h-8 w-full rounded-md bg-medium-gray pl-2 text-xs"
                  style={{ color: "#555555" }}
                  type="password"
                  placeholder="********"
                  {...register("confirmPassword" as never, {
                    required:
                      "Debes ingresar una confirmación de la contraseña",
                    minLength: {
                      value: 5,
                      message: "Mínimo 5 caracteres",
                    },
                    maxLength: {
                      value: 10,
                      message: "Máximo 10 caracteres",
                    },
                    validate: (val: string) => {
                      if (getValues("password" as never) !== val) {
                        return true;
                      }
                    },
                  })}
                />
                <div
                  className="mb-4 mt-1 h-4 font-Poppins text-red-500"
                  style={{
                    width: "320px",
                    fontSize: "12px",
                    lineHeight: "13px",
                  }}
                >
                  <ErrorMessage
                    errors={errors}
                    name={"confirmPassword" as never}
                    render={({ message }) => <div>{message}</div>}
                  />
                  {watch("confirmPassword" as never) &&
                    watch("password" as never) !==
                      watch("confirmPassword" as never) && (
                      <div>Las contraseñas no coinciden</div>
                    )}
                </div>
                <div
                className="mb-3 h-4 text-center font-Poppins text-red-500"
                style={{
                  width: "320px",
                  fontSize: "17px",
                  lineHeight: "17px",
                }}
              >
                {isError &&
                  "Error creando usuario"}
              </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  validateAndSubmit();
                }}
                className="w-full rounded-md p-3 text-center font-Poppins text-xs"
                style={{ backgroundColor: "#605DCE", color: "#fff" }}
              >
                {isRegisteringUser ? "Cargando..." : "Registrarse"}
              </button>
            </form>
            <div className="mt-3 flex h-4 justify-center gap-2">
              <div
                className="font-Poppins"
                style={{
                  fontSize: "10px",
                  lineHeight: "11px",
                }}
              >
                ¿Ya tienes una cuenta?
              </div>
              <div
                className="cursor-pointer font-Poppins underline"
                style={{
                  fontSize: "10px",
                  lineHeight: "11px",
                }}
                onClick={() => navigate("/")}
              >
                INGRESAR
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default SignUp;

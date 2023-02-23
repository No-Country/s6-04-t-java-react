const SignUp = () => {
  return (
    <div className="rounded-2xl bg-white px-8 pt-8 pb-4">
      <h2 className="mb-8 text-center">LIVETO</h2>
      <h2 className="mb-2">Nueva cuenta</h2>
      <h3 className="mb-4">Si es tu primera vez aqui, crea tu cuenta</h3>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="email">Ingresa tu correo electronico</label>
          <input
            className="rounded-md bg-medium-gray p-2"
            type="email"
            placeholder="ejemplo@123.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Crea tu contraseña</label>
          <input
            className="rounded-md bg-medium-gray p-2"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Repite tu contraseña</label>
          <input
            className="rounded-md bg-medium-gray p-2"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="code">Codigo de administrador</label>
          <input
            className="rounded-md bg-medium-gray p-2"
            type="text"
            placeholder="_ _ _ _ _"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-2xl bg-blue p-4 text-white"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};
export default SignUp;

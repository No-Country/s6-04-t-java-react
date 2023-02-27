import React from "react";
import { useForm } from "react-hook-form";

const BillingForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <button
        className=" mr-1 mb-1 rounded px-6 py-3 text-sm font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <i
          className="fas fa-pencil-alt mr-2 text-slate-700"
          aria-hidden="true"
        ></i>
        Edit
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">Editar</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <form className="w-full max-w-lg">
                    <div className="-mx-3 mb-6 flex flex-wrap">
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                          type="text"
                          placeholder="Jane"
                        />
                      </div>

                      <div className="w-full px-3 md:w-1/2">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          className="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-last-name"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 mb-6 flex flex-wrap">
                      <div className="w-full px-3">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-password"
                        >
                          Email
                        </label>
                        <input
                          className="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-password"
                          type="email"
                          placeholder="email@email.com"
                        />
                      </div>
                    </div>
                    <div className="-mx-3 mb-2 flex flex-wrap">
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-city"
                        >
                          Bank
                        </label>
                        <input
                          className="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-city"
                          type="text"
                          placeholder="Albuquerque"
                        />
                      </div>
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-zip"
                        >
                          Phone Number
                        </label>
                        <input
                          className="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-zip"
                          type="text"
                          placeholder="90210"
                        />
                      </div>
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-zip"
                        >
                          VAT Number
                        </label>
                        <input
                          className="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-zip"
                          type="text"
                          placeholder="90210"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default BillingForm;

import React from 'react'

const ViewReceipt = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <button
          className=" font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <i className="mr-1 fas fa-file-pdf text-lg"></i> 
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Receipt
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                  <form className="w-full max-w-lg">
                    <div className="-mx-3 mb-6 flex flex-wrap">
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-first-name"
                        >
                          First Name
                        </label>
                        <p
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                        >Jane</p>
                      </div>

                      <div className="w-full px-3 md:w-1/2">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-last-name"
                        >
                          Last Name
                        </label>
                        <p
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                        >Doe</p>
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
                        <p
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                        >joseandresgavilanes2012@gmail.com</p>
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
                        <p
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                        >Albuquerque</p>
                      </div>
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-zip"
                        >
                          Phone Number
                        </label>
                        <p
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                        >0995426348</p>
                      </div>
                      <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                        <label
                          className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
                          for="grid-zip"
                        >
                          VAT Number
                        </label>
                        <p
                          className="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
                          id="grid-first-name"
                        >1801011</p>
                      </div>
                    </div>
                  </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className=" text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
}

export default ViewReceipt
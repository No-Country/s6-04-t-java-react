import React from 'react'

const Billing = () => {
  return (
    <>
    <div className="pl-6 flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mb-4 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div className="relative overflow-hidden rounded-2xl" style={{
background: "linear-gradient(307deg, rgba(2,0,36,1) 0%, rgba(166,34,210,1) 0%, rgba(224,87,255,1) 3%, rgba(209,86,86,1) 100%)"

}}>
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
                    <div className="relative z-10 flex-auto p-4">
                      <i className="p-2 text-white fas fa-wifi"></i>
                      <h5 className="pb-2 mt-6 mb-12 text-white">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                      <div className="flex">
                        <div className="flex">
                          <div className="mr-6">
                            <p className="mb-0 leading-normal text-white text-sm opacity-80">Card Holder</p>
                            <h6 className="mb-0 text-white">Jack Peterson</h6>
                          </div>
                          <div>
                            <p className="mb-0 leading-normal text-white text-sm opacity-80">Expires</p>
                            <h6 className="mb-0 text-white">11/22</h6>
                          </div>
                        </div>
                        <div className="flex items-end justify-end w-1/5 ml-auto">
                          <img className="w-3/5 mt-2" src="../assets/img/logos/mastercard.png" alt="logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
                          <i className="relative text-white opacity-100 fas fa-landmark text-xl top-31/100"></i>
                        </div>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center">Salary</h6>
                        <span className="leading-tight text-xs">Belong Interactive</span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                        <h5 className="mb-0">+$2000</h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
                          <i className="relative text-white opacity-100 fab fa-paypal text-xl top-31/100"></i>
                        </div>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center">Paypal</h6>
                        <span className="leading-tight text-xs">Freelance Payment</span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                        <h5 className="mb-0">$455.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full px-3 mb-4 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <div className="flex flex-wrap -mx-3">
                      <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                        <h6 className="mb-0">Payment Method</h6>
                      </div>
                      <div className="flex-none w-1/2 max-w-full px-3 text-right">
                        <a className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all bg-transparent rounded-lg cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25" href="javascript:;"> <i className="fas fa-plus"> </i>&nbsp;&nbsp;Add New Card</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap -mx-3">
                      <div className="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
                          <img className="mb-0 mr-4 w-1/10" src="../assets/img/logos/mastercard.png" alt="logo" />
                          <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                          <i className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700" data-target="tooltip_trigger" data-placement="top"></i>
                          <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm">
                            Edit Card
                            <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
                          <img className="mb-0 mr-4 w-1/10" src="../assets/img/logos/visa.png" alt="logo" />
                          <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
                          <i className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700" data-target="tooltip_trigger" data-placement="top"></i>
                          <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm">
                            Edit Card
                            <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                    <h6 className="mb-0">Invoices</h6>
                  </div>
                  <div className="flex-none w-1/2 max-w-full px-3 text-right">
                    <button className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75">View All</button>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4 pb-0">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex flex-col">
                      <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">March, 01, 2020</h6>
                      <span className="leading-tight text-xs">#MS-415646</span>
                    </div>
                    <div className="flex items-center leading-normal text-sm">
                      $180
                      <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">February, 10, 2021</h6>
                      <span className="leading-tight text-xs">#RV-126749</span>
                    </div>
                    <div className="flex items-center leading-normal text-sm">
                      $250
                      <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">April, 05, 2020</h6>
                      <span className="leading-tight text-xs">#FB-212562</span>
                    </div>
                    <div className="flex items-center leading-normal text-sm">
                      $560
                      <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">June, 25, 2019</h6>
                      <span className="leading-tight text-xs">#QW-103578</span>
                    </div>
                    <div className="flex items-center leading-normal text-sm">
                      $120
                      <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 bg-white border-0 rounded-b-inherit rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">March, 01, 2019</h6>
                      <span className="leading-tight text-xs">#AR-803481</span>
                    </div>
                    <div className="flex items-center leading-normal text-sm">
                      $300
                      <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-6 flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 className="mb-0">Billing Information</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                    <div className="flex flex-col">
                      <h6 className="mb-4 leading-normal text-sm">Oliver Liam</h6>
                      <span className="mb-2 leading-tight text-xs">Company Name: <span className="font-semibold text-slate-700 sm:ml-2">Viking Burrito</span></span>
                      <span className="mb-2 leading-tight text-xs">Email Address: <span className="font-semibold text-slate-700 sm:ml-2">oliver@burrito.com</span></span>
                      <span className="leading-tight text-xs">VAT Number: <span className="font-semibold text-slate-700 sm:ml-2">FRB1235476</span></span>
                    </div>
                    <div className="ml-auto text-right">
                      <a className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;"><i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>Delete</a>
                      <a className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i>Edit</a>
                    </div>
                  </li>
                  <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-50">
                    <div className="flex flex-col">
                      <h6 className="mb-4 leading-normal text-sm">Lucas Harper</h6>
                      <span className="mb-2 leading-tight text-xs">Company Name: <span className="font-semibold text-slate-700 sm:ml-2">Stone Tech Zone</span></span>
                      <span className="mb-2 leading-tight text-xs">Email Address: <span className="font-semibold text-slate-700 sm:ml-2">lucas@stone-tech.com</span></span>
                      <span className="leading-tight text-xs">VAT Number: <span className="font-semibold text-slate-700 sm:ml-2">FRB1235476</span></span>
                    </div>
                    <div className="ml-auto text-right">
                      <a className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;"><i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>Delete</a>
                      <a className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i>Edit</a>
                    </div>
                  </li>
                  <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50">
                    <div className="flex flex-col">
                      <h6 className="mb-4 leading-normal text-sm">Ethan James</h6>
                      <span className="mb-2 leading-tight text-xs">Company Name: <span className="font-semibold text-slate-700 sm:ml-2">Fiber Notion</span></span>
                      <span className="mb-2 leading-tight text-xs">Email Address: <span className="font-semibold text-slate-700 sm:ml-2">ethan@fiber.com</span></span>
                      <span className="leading-tight text-xs">VAT Number: <span className="font-semibold text-slate-700 sm:ml-2">FRB1235476</span></span>
                    </div>
                    <div className="ml-auto text-right">
                      <a className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;"><i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>Delete</a>
                      <a className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true"></i>Edit</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Billing
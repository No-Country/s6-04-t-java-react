import React, { useState } from 'react'
import BillingForm from './BillingForm/BillingForm'
import ViewReceipt from './ViewReceipt/ViewReceipt'
import BillingItem from './BillingItem/BillingItem'
import InvoicesItem from './InvoicesItem/InvoicesItem'

const Billing = () => {


  const [formName, setFormName] = useState("Jose")
  const [formLastName, setFormLastName] = useState("Gavilanes")
  const [formBank, setFormBank] = useState("Santander")
  const [formEmail, setFormEmail] = useState("josegavilanes@gmail.com")
  const [formPhone, setFormPhone] = useState("0995426348")
  const [formVAT, setFormVAT] = useState("FRB1235476")
  
  const cardData = 
  {
    id: 1,
    cardId: "4562 1122 4594 7852",
    name: "Alexander Ramirez",
    date: "11/22",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  }

const billingData = [
  {
    id:1,
    formName: "Alexander",
    formLastName: "Ramirez",
    formBank: "Santander",
    formEmail: "josegavilanes@gmail.com",
    formPhone: "0995426348",
    formVAT: "FRB1235476",
    
    
  },
  {
    id:2,
    formName: "Alexander",
    formLastName: "Ramirez",
    formBank: "Pacifico",
    formEmail: "alexander@gmail.com",
    formPhone: "0995426654",
    formVAT: "RAG1234176",
    
    
  },
]

const invoicesData = [

  {
    id:1,
    date: "March, 01, 2023",
    code: "#YS-415646",
    amount: 180,
    name: "josegavilanes@gmail.com",
    lastname: "0995426348",
    email: "FRB1235476",
    bank: "Santander",
    phone: "0995426021",
    varCode: "FRB1235476",
    
    
    
  },

  {
    id:2,
    date: "April, 14, 2022",
    code: "#MS-415646",
    amount: 180,
    name: "josegavilanes@gmail.com",
    lastname: "0995426348",
    email: "FRB1235476",
    bank: "Santander",
    phone: "0995426021",
    varCode: "FRB1235476",
    
    
    
  },  {
    id:3,
    date: "February, 01, 2021",
    code: "#QP-155646",
    amount: 280,
    name: "josegavilanes@gmail.com",
    lastname: "0995426348",
    email: "FRB1235476",
    bank: "Santander",
    phone: "0995426021",
    varCode: "FRB1235476",
    
    
    
  },

  {
    id:4,
    date: "April, 04, 2022",
    code: "#WS-415612",
    amount: 200,
    name: "Jose",
    lastname: "Gavilanes",
    email: "josegavilanes@gmail.com",
    bank: "Santander",
    phone: "0995426021",
    varCode: "FRB1235476",
    
    
    
  },

  {
    id:5,
    date: "September, 20, 2022",
    code: "#ER-413646",
    amount: 380,
    name: "josegavilanes@gmail.com",
    lastname: "0995426348",
    email: "FRB1235476",
    bank: "Santander",
    phone: "0995426021",
    varCode: "FRB1235476",
    
    
    
  },
]


  return (
    <>
    <div className="pl-6 flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mb-4 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div className="relative overflow-hidden rounded-2xl" style={{
background: "linear-gradient(307deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 3%, rgba(69,69,69,1) 100%)"

}}>
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
                    <div className="relative z-10 flex-auto p-4">
                      <i className="p-2 text-white fas fa-wifi"></i>
                      <h5 className="pb-2 mt-6 mb-12 text-white">{cardData.cardId} </h5>
                      <div className="flex">
                        <div className="flex">
                          <div className="mr-6">
                            <p className="mb-0 leading-normal text-white text-sm opacity-80">Card Holder</p>
                            <h6 className="mb-0 text-white">{cardData.name}</h6>
                          </div>
                          <div>
                            <p className="mb-0 leading-normal text-white text-sm opacity-80">Expires</p>
                            <h6 className="mb-0 text-white">{cardData.date}</h6>
                          </div>
                        </div>
                        <div className="flex items-end justify-end w-1/5 ml-auto">
                          <img className="w-3/5 mt-2" src={cardData.url} alt="logo" />
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
                        <div className="ml-4 w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-[black] to-[gray] shadow-soft-2xl rounded-xl">
                          <i className="mt-5 relative text-white opacity-100 fas fa-landmark text-xl top-31/100"></i>
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
                        <div className="ml-4 w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-[black] to-[gray] shadow-soft-2xl rounded-xl">
                          <i className="mt-5 relative text-white opacity-100 fab fa-paypal text-xl top-31/100"></i>
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
                          <img className="mb-0 mr-4 w-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="logo" />
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
                          <img className="mb-0 mr-4 w-[50px]" src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2014.png" alt="logo" />
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
                    <button className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-[black] text-[black] hover:opacity-75">View All</button>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4 pb-0">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  {
                    invoicesData.map((data) => 
                      <InvoicesItem data={data} index={data.id} />
                    )
                  }
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
                  {
                    billingData.map((data) => <BillingItem data={data} index={data.id} /> )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Billing
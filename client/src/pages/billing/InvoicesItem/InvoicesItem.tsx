import React from 'react'
import ViewReceipt from '../ViewReceipt/ViewReceipt'

const InvoicesItem = ({data}) => {
  return (
    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
    <div className="flex flex-col">
      <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700">{data.date}</h6>
      <span className="leading-tight text-xs">{data.code}</span>
    </div>
    <div className="flex items-center leading-normal text-sm">
      ${data.amount}
      <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><ViewReceipt data={data} /> </button>
    </div>
  </li>
  )
}

export default InvoicesItem
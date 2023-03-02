import React, { useState } from "react";
import BillingForm from "../BillingForm/BillingForm";

const BillingItem = ({data}) => {

  const [emailChange, setEmailChange] = useState(data.formEmail)
  const [formVAT, setFormVAT] = useState(data.formVAT)
  const [formLastName, setFormLastName] = useState(data.formLastName)
  const [formName, setFormName] = useState(data.formName)
  const [formBank, setFormBank] = useState(data.formBank)
  const [formPhone, setFormPhone] = useState(data.formPhone)

  return (
    <li className="rounded-b-inherit bg-gray-50 relative mt-4 mb-2 flex rounded-xl border-0 p-6">
      <div className="flex flex-col">
        <h6 className="mb-4 text-sm leading-normal">
          {" "}
          <span>{formName}</span> <span>{formLastName}</span>{" "}
        </h6>
        <span className="mb-2 text-xs leading-tight">
          Bank:{" "}
          <span className="font-semibold text-slate-700 sm:ml-2">
            {" "}
            {formBank}{" "}
          </span>
        </span>
        <span className="mb-2 text-xs leading-tight">
          Email Address:{" "}
          <span className="font-semibold text-slate-700 sm:ml-2">
            {" "}
            {emailChange}{" "}
          </span>
        </span>
        <span className="mb-2 text-xs leading-tight">
          Phone Number:{" "}
          <span className="font-semibold text-slate-700 sm:ml-2">
            {" "}
            {formPhone}{" "}
          </span>
        </span>
        <span className="text-xs leading-tight">
          VAT Number:{" "}
          <span className="font-semibold text-slate-700 sm:ml-2"></span>{" "}
          {formVAT}{" "}
        </span>
      </div>
      <div className="ml-auto text-right">
        <a
          className="leading-pro ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-transparent px-4 py-3 text-center align-middle text-xs font-bold uppercase text-slate-700 shadow-none transition-all"
          href="javascript:;"
        >
          <BillingForm
            setFormName={setFormName}
            formName={formName}
            formLastName={formLastName}
            setFormLastName={setFormLastName}
            formBank={formBank}
            setFormBank={setFormBank}
            formEmail={emailChange}
            setFormEmail={setEmailChange}
            formPhone={formPhone}
            setFormPhone={setFormPhone}
            formVAT={formVAT}
            setFormVAT={setFormVAT}
          />
        </a>
      </div>
    </li>
  );
};

export default BillingItem;

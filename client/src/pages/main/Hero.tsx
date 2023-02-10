import React from "react";
import Stats from "./Stats";
import "./test.css"

export const hero = {
  title: "Simplifica tu vida y tus cuentas",
  subtitle:
    "Hemos desarrollado una aplicación web que permite realizar tus cuentas personales y mantenerte al día con lo que pasa en la residencia",
  buttonText: "Acceder",
};


const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section className="bg-hero mb-12 h-full max-h-[650px] w-full bg-cover bg-right bg-no-repeat pt-[155px] pb-[254px] text-white lg:mb-28 lg:bg-center">
      <div className="container mx-auto text-center">
        {/* title */}
        <h1 className="mx-auto mb-[30px] text-2xl font-semibold lg:max-w-[888px] lg:text-[64px] lg:leading-tight">
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mx-auto mb-[10px] max-w-[627px] lg:mb-[15px] lg:text-xl">
          {subtitle}
        </h2>
        {/* button */}
        <button className="rounded-md bg-[rgba(255,255,255,0.4)] px-[35px] py-[9px] text-xl backdrop-blur-md transition hover:bg-[rgba(255,255,255,0.5)] lg:mb-[194px] lg:px-[80px] lg:py-[16px]">
          {buttonText}
        </button>
        {/* stats */}
        
      </div>
    </section>
  );
};

export default Hero;

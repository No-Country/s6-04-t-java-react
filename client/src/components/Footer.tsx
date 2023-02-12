import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-white">
      <div className="container mx-auto p-6">
        <div className="lg:flex">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-6">
              <NavLink to="/home">
                <img
                  className="h-7 w-auto"
                  src=""
                  alt="LIVETO"
                />
              </NavLink>

              <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum odio cumque accusantium impedit tempore quas perferendis hic aliquid porro.
              </p>

        
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-black">
                  About
                </h3>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Spaces
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-black">
                  Explora
                </h3>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Escritorio
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Gastos y Expensas
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Mensajes
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-black">
                  Explora
                </h3>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Espacios Comunes
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline"
                >
                  Reportes
                </a>
                
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-black ">
                  Contacto
                </h3>
                <span className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline">
                  +000000000000
                </span>
                <span className="text-gray-600 dark:text-gray-400 mt-2 block text-sm hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-gray-200 dark:bg-gray-700 my-6 h-px border-none" />

        <div>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            © Liveto 2023 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

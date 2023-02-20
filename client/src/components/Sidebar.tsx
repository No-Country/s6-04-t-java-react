import { useState } from "react";
import {
  RiBuilding4Line,
  RiDashboardLine,
  RiMessage3Line,
  RiWallet2Line,
  RiCommunityFill,
  RiAlertFill,
  RiLogoutBoxLine,
  RiHome3Line,
} from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../service/auth";

const links = [
  {
    name: "Escritorio",
    to: "/home",
    icon: <RiDashboardLine />,
  },
  {
    name: "Gastos y expensas",
    to: "/expenses",
    icon: <RiWallet2Line />,
  },
  {
    name: "Espacios comunes",
    to: "/amenities",
    icon: <RiCommunityFill />,
  },
  {
    name: "Mensajes",
    to: "/message",
    icon: <RiMessage3Line />,
  },
  {
    name: "Reportes",
    to: "/request",
    icon: <RiAlertFill />,
  },
  {
    name: "Estadisticas",
    to: "/statistics",
    icon: <RiAlertFill />,
  },
  {
    name: "Pago",
    to: "/billing",
    icon: <RiAlertFill />,
  }
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(0); // (0) means Reload page
  };

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    if (!menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `flex items-center rounded-lg text-lg font-bold py-2 border-2 border-transparent hover:border-[#C9E6FD] hover:border-2 hover:rounded-lg text-start ${
      isActive ? "bg-[#C9E6FD]" : ""
    }`;
  };

  return (
    <div className="1048:w-70 text-black-navbar 2xl:w-80">
      <div className="clip-path bg-white shadow-[0_0_0_100vmax_rgba(255,255,255,1)] 1048:hidden">
        <div className="flex max-w-sm flex-row-reverse justify-between py-2 ">
          <h2 className="flex flex-row items-center gap-4 text-center font-bold uppercase tracking-[4px]">
            <RiBuilding4Line className="text-[2.5rem]" />
            liveto
          </h2>
          <button onClick={openMenu} className="bg-blue-400 ">
            <RiHome3Line className="text-[2.5rem]" />
          </button>
        </div>
      </div>
      <nav
        className={`min-w-80 fixed flex h-screen w-full list-none flex-col justify-around overflow-auto bg-white p-4 shadow-lg ${
          menuIsOpen
            ? "right-0 duration-500 ease-in-out"
            : "right-full  duration-500 ease-in-out "
        } top-0 1048:relative 1048:right-0 `}
      >
        <div className="flex w-full basis-1/5 flex-row-reverse items-start justify-between px-6 py-2 450:px-12 sm:px-[20%] 1048:justify-center">
          <h2 className="flex flex-row items-center gap-4 text-center text-2xl font-bold uppercase tracking-[4px]">
            <RiBuilding4Line className="text-[2.5rem] font-bold" />
            <NavLink to="/main">liveto</NavLink>
          </h2>
          <button onClick={openMenu} className="bg-blue-400 1048:hidden ">
            <RiHome3Line className="text-[2.5rem]" />
          </button>
        </div>
        <ul className=" w-70 flex h-4/6 basis-2/5 flex-col items-center justify-around">
          {links.map((link) => (
            <li key={link.name} className="m-auto min-w-[80%]">
              <NavLink
                className={navLinkCssClasses}
                to={link.to}
                onClick={openMenu}
              >
                <div className="mx-3 text-lg">{link.icon}</div>
                <p>{link.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex w-full basis-2/5 items-center justify-start gap-8  1048:items-end ">
          <Link
            to="/"
            className="flex min-w-[80%] items-center rounded-lg border-2 border-transparent py-2 text-lg font-bold selection:bg-[#C9E6FD]  hover:rounded-lg hover:border-2 hover:border-[#C9E6FD]"
            onClick={() => handleLogout()}
          >
            <RiLogoutBoxLine className="mx-3 text-lg" />
            Salir de cuenta
          </Link>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import md from "../images/md.png";
import { Button } from "./Button";
// import menico from "../images/menu.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
export const Navbar = () => {
  let Links = [
    { name: "home", link: "/" },
    { name: "safety", link: "/safety" },
    { name: "faq", link: "/faq" },
    { name: "contact", link: "/contact" },
    { name: "shop", link: "/shop" },
  ];
  let [show, setShow] = React.useState(false);
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-dBlue py-4 md:px-10 px-7 text-white items-center justify-between">
        <div className=" font-spacemono font-bold cursor-pointer flex items-center">
          <img src={md} alt="logo" className="h-14" />
          <span>myDrugs</span>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {show ? <IoClose /> : <IoMenu />}
        </div>
        <ul
          className={`md:flex md:items-center font-spacemono md:pb-0 pb-6 md:static absolute bg-dBlue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in ${
            show
              ? "top-20 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((link) => (
            <div className="flex justify-center">
              <li key={link.name} className="md:ml-8 text-sm md:my-0 my-5">
                <a
                  href={link.link}
                  className="text-white hover:text-gray-400 duration-300"
                >
                  {link.name}
                </a>
              </li>
            </div>
          ))}
          <div className="flex justify-center">
            <li className="text-sm md:my-0 my-5">
              <Button name="login" />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

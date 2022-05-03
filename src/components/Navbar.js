import React from "react";
import md from "../images/md.png";
import { Button } from "./Button";
export const Navbar = () => {
  let Links = [
    { name: "home", link: "/" },
    { name: "safety", link: "/safety" },
    { name: "faq", link: "/faq" },
    { name: "contact", link: "/contact" },
    { name: "shop", link: "/shop" },
  ];
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-[#13161E] py-4 md:px-10 px-7 text-white items-center justify-between">
        <div className=" font-spacemono font-bold cursor-pointer flex items-center">
          <img src={md} alt="logo" className="h-14" />
          <span>myDrugs</span>
        </div>
        <ul className="md:flex md:items-center font-spacemono md:pb-0 pb:12 md:static absolute bg-[#13161E] md:z-auto z-[-1] left-0 w-full md:w-auto">
          {Links.map((link) => (
            <li className="md:ml-8 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <Button name="login" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

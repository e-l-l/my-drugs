import React, { useState } from "react";
import md from "../images/md.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
export const Navbar = () => {
  const [username, setUsername] = useState(null);
  const handleSignOut = () => {
    signOut(auth)
      .then(function () {
        console.log("Signed Out");
        setUsername("");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        setUsername(name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <li className="md:ml-8 text-sm md:my-0 my-5">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive ? "text-[#f47983] text-xl duration-100" : ""
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            </div>
          ))}
          <div className="flex justify-center">
            <li className="text-sm md:my-0 my-5">
              <button
                className="bg-[#6262FF] text-white py-2 px-4 rounded md:ml-8 hover:bg-purple-700 duration-300 text-sm"
                onClick={username ? () => {} : signInWithGoogle}
              >
                {username ? username : "login"}
              </button>
            </li>
          </div>
          {username && (
            <div className="flex justify-center">
              <li className="text-sm md:my-0 my-5">
                <button
                  className=" text-white py-2 px-4 rounded md:ml-4 hover:bg-purple-700 duration-300 text-sm"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

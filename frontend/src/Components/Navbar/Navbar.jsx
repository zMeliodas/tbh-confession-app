import { useState } from "react";
import NavButton from "src/Components/Navbar/NavButton";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import logo from "src/assets/logo.svg";
import { TbMessage2Heart } from "react-icons/tb";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = ({ onShareLinkClick }) => {
  return (
    <>
      <nav className="bg-backgroundColor flex justify-between px-4 md:justify-around items-center w-full py-1 fixed h-22">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-16 h-16 cursor-pointer" />
        </Link>

        <div className="hidden md:flex gap-3 items-center">
          <NavButton onClick={onShareLinkClick} rounded="rounded-xl" width="w-26" height="h-20">
            <IoIosLink className="w-8 h-8" />
          </NavButton>

          <Link to={"/inbox"}>
            <NavButton rounded="rounded-xl" width="w-26" height="h-20">
              <CgNotes className="w-8 h-8" />
            </NavButton>
          </Link>

          <Link to={"/confess"}>
            <NavButton rounded="rounded-xl" width="w-26" height="h-20">
              <TbMessage2Heart className="w-8 h-8" />
            </NavButton>
          </Link>

          <Link to={"/whisper"}>
            <NavButton rounded="rounded-xl" width="w-26" height="h-20">
              <TiMessages className="w-8 h-8" />
            </NavButton>
          </Link>

          <Link to={"/login"}>
            <NavButton rounded="rounded-xl" width="w-26" height="h-20">
              <FiLogIn className="w-8 h-8" />
            </NavButton>
          </Link>
        </div>

        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 
                flex items-center
                px-2 py-2 outline outline-white/3 rounded-4xl shadow-xl md:hidden"
        >
          <NavButton onClick={onShareLinkClick} rounded="rounded-3xl" width="w-18 sm:w-28" height="h-18 sm:h-20">
            <IoIosLink className="w-7 h-7" />
          </NavButton>

          <Link to={"/inbox"}>
            <NavButton rounded="rounded-3xl" width="w-18 sm:w-28" height="h-18 sm:h-20">
              <CgNotes className="w-7 h-7" />
            </NavButton>
          </Link>

          <Link to={"/confess"}>
            <NavButton rounded="rounded-3xl" width="w-18 sm:w-28" height="h-18 sm:h-20">
              <TbMessage2Heart className="w-7 h-7" />
            </NavButton>
          </Link>

          <Link to={"/whisper"}>
            <NavButton rounded="rounded-3xl" width="w-18 sm:w-28" height="h-18 sm:h-20">
              <TiMessages className="w-7 h-7" />
            </NavButton>
          </Link>

          <Link to={"/login"}>
            <NavButton rounded="rounded-3xl" width="w-16 sm:w-28" height="h-18 sm:h-20">
              <FiLogIn className="w-7 h-7" />
            </NavButton>
          </Link>
        </div>

        <ThemeToggle />
      </nav>
    </>
  );
};

export default Navbar;

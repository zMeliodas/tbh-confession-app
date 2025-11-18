import { useState } from "react";
import NavButton from "src/Components/Navbar/NavButton";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import moon from "src/assets/moon.svg";
import logo from "src/assets/logo.svg";
import { TbMessage2Heart } from "react-icons/tb";



const Navbar = ({ onShareLinkClick }) => {
  return (
    <nav className="bg-dark flex justify-around items-center w-screen py-1 fixed h-22">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-16 h-16 cursor-pointer" />
      </Link>

      <div className="flex gap-3 items-center">
        <NavButton onClick={onShareLinkClick}>
          <IoIosLink className="w-8 h-8" />
        </NavButton>

        <Link to={"/inbox"}>
          <NavButton>
            <CgNotes className="w-8 h-8" />
          </NavButton>
        </Link>

        <Link to={"/confess"}>
          <NavButton>
            <TbMessage2Heart className="w-8 h-8" />
          </NavButton>
        </Link>

        <Link to={"/whisper"}>
          <NavButton>
            <TiMessages className="w-8 h-8" />
          </NavButton>
        </Link>

        <Link to={"/login"}>
          <NavButton>
            <FiLogIn className="w-8 h-8" />
          </NavButton>
        </Link>
      </div>

      <img src={moon} alt="theme icon" className="w-8 h-8 cursor-pointer" />
    </nav>
  );
};

export default Navbar;

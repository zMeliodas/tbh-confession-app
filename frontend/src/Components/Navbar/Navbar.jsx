import { useState } from "react";
import NavButton from "src/Components/Navbar/NavButton";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import moon from "src/assets/moon.svg";
import ShareLinkModal from "../Modals/ShareLinkModal";

const Navbar = () => {
  return (
    <>
      <nav className="bg-dark flex justify-around items-center w-screen py-1 fixed top:0 left:0 h-22">
        <Link to={"/"}>
          <span className="font-semibold text-lg flex items-center text-offWhite">
            tbh.link
          </span>
        </Link>

        <div className="flex gap-3 items-center">
          <NavButton
            onClick={() => {
              document.getElementById("share_link_modal").showModal();
            }}
          >
            <IoIosLink className="w-8 h-8" />
          </NavButton>

          <Link to={"/inbox"}>
            <NavButton>
              <CgNotes className="w-8 h-8" />
            </NavButton>
          </Link>

          <Link to={"/shareLink"}>
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
      <ShareLinkModal />
    </>
  );
};

export default Navbar;

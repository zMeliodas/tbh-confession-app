import React from "react";
import InputField from "../common/InputField";
import { FaRegCopy } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ShareLinkModal = ({ onClose }) => {
  return (
    <div className="fixed flex h-full w-full justify-center content-center items-center bg-black/50 transition">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start items-start border rounded-xl border-borderColor">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl  text-primaryTextColor font-mulish font-bold">
            Share link
          </h1>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-lg text-primaryTextColor flex content-center justify-center font-medium bg-transparent font-mulish border-transparent p-2 w-12 ml-2 rounded-lg cursor-pointer"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>
        </div>

        <h2 className="text-md text-secondaryTextColor font-mulish font-light">
          Get anonymous messages using this link.
        </h2>
        <div className="flex">
          <InputField placeholderText="link" inputType="text" />
          <button className="text-lg flex content-center justify-center font-medium bg-purple font-mulish border-transparent p-2 w-12 ml-2 rounded-lg cursor-pointer hover:bg-purpleHover">
            <FaRegCopy className="w-6 h-6 text-offWhite" />
          </button>
        </div>

        <button
          onClick={() => {
            onClose();
          }}
          className="text-sm text-primaryTextColor font-medium bg-greyButton font-mulish border p-2 mt-4 border-borderColor rounded-xl cursor-pointer hover:bg-hoverColorNav"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareLinkModal;

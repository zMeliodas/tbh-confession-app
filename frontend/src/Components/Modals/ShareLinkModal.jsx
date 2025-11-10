import React from "react";
import InputField from "../common/InputField";
import { FaRegCopy } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ShareLinkModal = () => {
  return (
    <dialog id="share_link_modal" className="m-auto bg-transparent">
      <form className="bg-cardBg flex flex-col p-4 justify-start content-start items-start border rounded-xl border-borderOutline">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl  text-offWhite font-mulish font-bold">
            Share link
          </h1>
          <button className="text-lg text-offWhite flex content-center justify-center font-medium bg-transparent font-mulish border-transparent p-2 w-12 ml-2 rounded-lg cursor-pointer">
            <IoCloseOutline className="w-6 h-6" />
          </button>
        </div>

        <h2 className="text-md text-secondaryColorGray font-mulish font-light">
          Get anonymous messages using this link.
        </h2>
        <div className="flex">
          <InputField placeholderText="link" inputType="text" />
          <button type="button" className="text-lg text-offWhite flex content-center justify-center font-medium bg-pink font-mulish border-transparent p-2 w-12 ml-2 rounded-lg cursor-pointer hover:bg-pinkHover">
            <FaRegCopy className="w-6 h-6" />
          </button>
        </div>

        <button className="text-sm text-white font-medium bg-greyButton font-mulish border p-2 mt-4 border-borderOutline rounded-xl cursor-pointer hover:bg-customBrown">
          Close
        </button>
      </form>
    </dialog>
  );
};

export default ShareLinkModal;
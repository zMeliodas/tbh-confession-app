import React, { useState, useEffect } from "react";
import InputField from "../common/InputField";
import { FaRegCopy } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ShareLinkModal = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
        visible ? "bg-black/30" : "bg-black/0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-cardBg flex flex-col p-4 border rounded-xl border-borderColor transition-all duration-300 ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl text-primaryTextColor font-mulish font-bold">
            Share link
          </h1>

          <button
            onClick={onClose}
            className="text-lg text-primaryTextColor flex justify-center p-2 w-12 rounded-lg"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>
        </div>

        <h2 className="text-md text-secondaryTextColor font-mulish font-light">
          Get anonymous messages using this link.
        </h2>

        <div className="flex mt-2">
          <InputField
            width="w-68 sm:w-md"
            placeholderText="link"
            inputType="text"
          />

          <button className="flex justify-center bg-purple p-2 w-12 ml-2 rounded-lg hover:bg-purpleHover">
            <FaRegCopy className="w-6 h-6 text-offWhite" />
          </button>
        </div>

        <button
          onClick={onClose}
          className="text-sm text-primaryTextColor bg-greyButton p-2 mt-4 border border-borderColor rounded-xl hover:bg-hoverColorNav"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareLinkModal;
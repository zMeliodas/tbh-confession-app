import React from "react";
import { TbMessage2Plus } from "react-icons/tb";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const CustomReceivedMessageCard = ({ content, createdAt }) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div
        className={`bg-purple flex flex-col p-4 pb-1 mb-2 border rounded-lg w-72 sm:w-lg md:w-2xl border-borderColor`}
      >
        <div className="flex justify-center font-black">
          <span
            className={`text-offWhite text-sm sm:text-base md:text-lg font-mulish font-black select-none`}
          >
            From an unknown sender
          </span>
        </div>

        <div className="bg-backgroundColor flex-col rounded-lg p-4 mt-2">
          <span
            className={`text-primaryTextColor text-sm sm:text-base md:text-lg font-mulish wrap-break-words`}
          >
            {content}
          </span>
        </div>

        <div className="flex flex-row-reverse py-2 justify-between">
          <div className="flex gap-2">
            <TbMessage2Plus
              title="Request Whisper"
              className="w-6 h-6 cursor-pointer text-offWhite duration-200 ease-in-out select-none hover:scale-110"
            />
            <RiImageAddLine
              title="Save image"
              className="w-6 h-6 cursor-pointer text-offWhite duration-200 ease-in-out select-none hover:scale-110"
            />
            <MdOutlineDelete
              title="Delete Message"
              className="w-6 h-6 cursor-pointer text-offWhite duration-200 ease-in-out select-none hover:scale-110"
            />
          </div>

          <span
            className={`text-textFieldColor text-sm font-mulish wrap-break-words`}
          >
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomReceivedMessageCard;

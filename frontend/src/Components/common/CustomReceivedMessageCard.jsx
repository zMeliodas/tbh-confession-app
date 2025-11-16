import React from "react";
import { TbMessage2Plus } from "react-icons/tb";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const CustomReceivedMessageCard = () => {
  return (
    <div className="bg-pinkHover flex flex-col p-4 pb-1 border rounded-lg border-borderOutline">
      <div className="flex justify-center font-black text-xl">
        <span className="text-offWhite font-mulish font-black">
          From an unknown sender
        </span>
      </div>

      <div className="bg-dark rounded-lg p-4 mt-2">
        <span className="text-offWhite font-mulish wrap-break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          corrupti ipsum laborum reprehenderit maxime soluta tenetur labore
          recusandae nisi distinctio inventore accusamus, laboriosam quia
          temporibus tempore odio ex suscipit explicabo. 
        </span>
      </div>

      <div className="flex flex-row-reverse p-2 gap-2">
        <TbMessage2Plus
          title="Request Whisper"
          className="w-6 h-6 cursor-pointer duration-200 ease-in-out select-none hover:scale-110"
        />
        <RiImageAddLine
          title="Save image"
          className="w-6 h-6 cursor-pointer duration-200 ease-in-out select-none hover:scale-110"
        />
        <MdOutlineDelete
          title="Delete Message"
          className="w-6 h-6 cursor-pointer duration-200 ease-in-out select-none hover:scale-110"
        />
      </div>
    </div>
  );
};

export default CustomReceivedMessageCard;

import { TbMessage2Plus } from "react-icons/tb";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const CustomSentMessageCard = ({ content, createdAt, recipient }) => {
  return (
    <div className="bg-purple flex flex-col p-4 py-2 mb-2 w-2xl max-w-2xl border rounded-lg border-borderColor">
      <div className="flex flex-row justify-between">
        <p className="font-mulish font-semibold">to: {recipient}</p>
        <p className="font-mulish font-semibold">tbh</p>
      </div>

      <div className="bg-backgroundColor rounded-lg p-4 my-2">
        <span className="text-primaryTextColor text-sm sm:text-base md:text-lg font-mulish wrap-break-words">
          {content}
        </span>
      </div>

      <div className="flex flex-row-reverse justify-between">
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

        <p className="flex font-mulish text-sm">{createdAt}</p>
      </div>
    </div>
  );
};

export default CustomSentMessageCard;

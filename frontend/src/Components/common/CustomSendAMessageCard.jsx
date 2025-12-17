import React, { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import CustomChatBubble from "./CustomChatBubble";
import { useAuth } from "../../providers/AuthProvider";
import { getInitials } from "../../utils/getInitials";

const CustomSendAMessageCard = () => {
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  return (
    <div className="bg-cardBg rounded-2xl w-full sm:w-2xl mx-4 border border-borderColor overflow-hidden">
      <div className="bg-purple border-b border-borderColor px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-offWhite">
          <span className="text-sm font-mulish select-none">To:</span>
          <span className="text-offWhite font-mulish font-bold">
            @{user.user_name}
          </span>
          <button>
            <FiShare2 className="w-4 h-4 cursor-pointer duration-200 ease-in-out select-none hover:scale-110" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-3 bg-promptContainer rounded-lg px-4 py-3">
          <div className="w-8 h-8 bg-textFieldGray rounded-lg flex items-center justify-center">
            {user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover select-none"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-lg font-semibold select-none text-offWhite">
                {getInitials(user.user_name)}
              </div>
            )}
          </div>
          <span className="text-primaryTextColor font-medium font-mulish select-none">
            Send me an anonymous confession!
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end pt-2 p-6 gap-0.5 h-56 overflow-y-auto custom-scroll">
        <CustomChatBubble content="Hi nigga" />
        <CustomChatBubble content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis facilis error labore ipsum assumenda officia, temporibus natus exercitationem voluptatum. Tempora itaque ea mollitia, magni placeat incidunt dolor nesciunt saepe." />
        <CustomChatBubble content="Ano gawa mo kupal?" />
        <CustomChatBubble content="shabu pa nigga" />
      </div>

      <div className="px-6 pb-6 pt-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full sm:flex-1 bg-textFieldBg text-primaryTextColor font-mulish placeholder-secondaryTextColor rounded-lg px-4 py-3 border border-borderColor outline-gray"
          />
          <button className="bg-purple hover:bg-purpleHover cursor-pointer text-offWhite rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
            <IoPaperPlaneOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSendAMessageCard;

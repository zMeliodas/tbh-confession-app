import React, { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import CustomChatBubble from "./CustomChatBubble";

const CustomSendAMessageCard = () => {
  const [message, setMessage] = useState("");

  const user = {
    username: "cedlemuel",
    image: "",
    link: "www.tbh.link/to/cedlemuel",
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <div className="bg-cardBg rounded-2xl w-2xl border border-borderOutline overflow-hidden">
      <div className="bg-pink border-b border-borderOutline px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-offWhite">
          <span className="text-sm font-mulish select-none">To:</span>
          <span className="text-offWhite font-mulish font-bold">
            @cedlemuel
          </span>
          <button>
            <FiShare2 className="w-4 h-4 cursor-pointer duration-200 ease-in-out select-none hover:scale-110" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-3 bg-textFieldGray rounded-lg px-4 py-3">
          <div className="w-8 h-8 bg-textFieldGray rounded-lg flex items-center justify-center">
            {user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover select-none"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-pink flex items-center justify-center text-lg font-semibold select-none text-offWhite">
                {getInitials(user.username)}
              </div>
            )}
          </div>
          <span className="text-white font-mulish select-none">
            Send me an anonymous confession!
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end pt-0 p-6 gap-0.5">
        <CustomChatBubble content="Hi nigga" />
        <CustomChatBubble
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            distinctio et, eveniet ratione quo ab, reprehenderit aliquid
            adipisci non officiis, exercitationem nobis. Vel quibusdam aperiam
            repudiandae ad dicta mollitia maxime.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            distinctio et, eveniet ratione quo ab, reprehenderit aliquid
            adipisci non officiis, exercitationem nobis. Vel quibusdam aperiam
            repudiandae ad dicta mollitia maxime."
        />
      </div>

      <div className="px-6 pb-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-borderOutline text-offWhite font-mulish placeholder-secondaryColorGray rounded-lg px-4 py-3 border border-borderOutline outline-gray"
          />
          <button className="bg-pink hover:bg-pinkHover cursor-pointer text-white rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
            <IoPaperPlaneOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSendAMessageCard;

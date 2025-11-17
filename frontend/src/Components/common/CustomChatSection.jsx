import React, { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const CustomChatSection = () => {
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
    <>
      <div className="bg-cardBg border border-borderOutline rounded-lg flex flex-col gap-2 shadow-2xl">
        <div className="flex justify-start border-b border-borderOutline gap-2 px-4 py-4 w-full">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover select-none"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-pink flex items-center justify-center text-lg select-none font-semibold text-offWhite">
              {getInitials(user.username)}
            </div>
          )}
          <span className="text-offWhite font-mulish font-bold pt-0.5">cedlemuel</span>
        </div>

        <div className="flex h-full gap-10 p-2">
          <div>asdjkahsdjkhsa</div>

          <div>asdjkahsdjkhsa</div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-borderOutline text-offWhite font-mulish placeholder-secondaryColorGray rounded-lg px-4 py-3 border border-borderOutline outline-gray w-6xl"
            />
            <button className="bg-pink hover:bg-pinkHover cursor-pointer text-white rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
              <IoPaperPlaneOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomChatSection;

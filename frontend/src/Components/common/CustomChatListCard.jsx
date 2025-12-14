import React from "react";
import { useAuth } from "src/providers/AuthProvider.jsx";
import { getInitials } from "../../utils/getInitials";

const CustomChatListCard = ({ username, content }) => {
  const { user } = useAuth();

  return (
    <div className="flex justify-start rounded-lg border-borderColor gap-2 px-2 py-2 w-full cursor-pointer hover:bg-secondaryTextColor/40">
      {user.image ? (
        <img
          src=""
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover select-none"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center text-lg select-none font-semibold text-primaryTextColor">
          {getInitials(user.user_name)}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-primaryTextColor font-mulish font-bold">
          {username}
        </span>
        <span className="text-primaryTextColor font-mulish font-light">
          {content}
        </span>
      </div>
    </div>
  );
};

export default CustomChatListCard;

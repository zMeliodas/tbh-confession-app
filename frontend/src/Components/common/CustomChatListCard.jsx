import React from "react";

const CustomChatListCard = ({username, content}) => {
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
    <div className="flex justify-start rounded-lg border-borderOutline gap-2 px-2 py-2 w-full cursor-pointer hover:bg-secondaryColorGray/40">
      {user.image ? (
        <img
          src={user.image}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover select-none"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-pink flex items-center justify-center text-lg select-none font-semibold text-offWhite">
          {getInitials(user.username)}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-offWhite font-mulish font-bold">{username}</span>
        <span className="text-offWhite font-mulish font-light">{content}</span>
      </div>
    </div>
  );
};

export default CustomChatListCard;

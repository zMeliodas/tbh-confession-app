import React from "react";

const NavButton = ({ children, onClick }) => {
  return (
    <span
      onClick={() => onClick()}
      className="flex items-center justify-center w-26 h-20 p-3 text-textColorNav hover:bg-hoverColorNav rounded-xl transition duration-300"
    >
      {children}
    </span>
  );
};

export default NavButton;
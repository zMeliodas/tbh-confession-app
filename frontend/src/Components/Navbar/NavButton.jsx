import React from "react";

const NavButton = ({ children, onClick, width, height, rounded }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${width} ${height} p-3 text-navIconColor hover:bg-hoverColorNav ${rounded} transition duration-300`}
    >
      {children}
    </button>
  );
};

export default NavButton;

import React from "react";

const CustomButtonGray = ({ icon, padding, paddingTop, text, width, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-customGray text-lg text-white font-medium font-mulish border border-borderColor ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-customHoverGray`}
      >
        {icon}
        <span>{text}</span>
      </button>
    </>
  );
};

export default CustomButtonGray;

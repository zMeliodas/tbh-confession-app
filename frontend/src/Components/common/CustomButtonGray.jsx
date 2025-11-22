import React from "react";

const CustomButtonGray = ({ icon, padding, paddingTop, text, width, onClick, textSize = "text-lg"}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-customGray ${textSize} text-white font-medium font-mulish border border-borderColor px-4 ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-customHoverGray`}
      >
        {icon}
        <span>{text}</span>
      </button>
    </>
  );
};

export default CustomButtonGray;

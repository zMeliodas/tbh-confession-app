import React from "react";

const CustomButtonGray = ({ icon, padding, paddingTop, text, width }) => {
  return (
    <>
      <button
        className={`bg-customGray text-lg text-white font-medium font-mulish border border-borderOutline ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-customHoverGray`}
      >
        {icon}
        <span>{text}</span>
      </button>
    </>
  );
};

export default CustomButtonGray;

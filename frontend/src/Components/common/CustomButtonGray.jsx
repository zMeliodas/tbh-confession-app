import React from "react";

const CustomButtonGray = ({icon, padding, paddingTop, text, width}) => {
  return (
    <>
      <button
        className={`bg-customBrown2 text-lg text-white font-medium bg-greyButton font-mulish border border-borderOutline ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-customBrown`}
      >
        {icon}
        <span>{text}</span>
      </button>
    </>
  );
};

export default CustomButtonGray;

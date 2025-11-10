import React from "react";

const CustomButtonPink = ({padding, paddingTop, text, width}) => {
  return (
    <>
      <button
        className={`text-lg text-white font-medium bg-pink font-mulish border-transparent ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-pinkHover`}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButtonPink;

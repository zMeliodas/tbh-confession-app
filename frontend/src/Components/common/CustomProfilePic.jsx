import React from "react";
import { getInitials } from "../../utils/getInitials";

const CustomProfilePic = ({
  username,
  src,
  baseSize,
  smSize,
  mdSize,
  textSize,
}) => {
  return src ? (
    <img
      src={src}
      alt="Profile"
      className={`${baseSize} ${smSize} ${mdSize} rounded-full object-cover select-none`}
    />
  ) : (
    <div
      className={`${baseSize} ${smSize} ${mdSize} ${textSize} rounded-full bg-purple text-primaryTextColor flex items-center justify-center font-semibold select-none`}
    >
      {getInitials(username)}
    </div>
  );
};

export default CustomProfilePic;

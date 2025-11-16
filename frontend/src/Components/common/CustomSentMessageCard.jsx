import React from "react";
import logo from "src/assets/logo.svg";

const CustomSentMessageCard = () => {
  return (
    <div className="bg-pinkHover flex flex-col p-4 border rounded-lg border-borderOutline">
      <div className="flex">
        <span className="flex-1 font-mulish font-semibold">to: @cedlemuel</span>
      </div>

      <div className="bg-dark rounded-lg p-4 mt-2">
        <span className="text-offWhite font-mulish wrap-break-words">niggatron</span>
      </div>
    </div>
  );
};

export default CustomSentMessageCard;

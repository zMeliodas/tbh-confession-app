import React from "react";
import logo from "src/assets/logo.svg";

const CustomSentMessageCard = ({content, createdAt}) => {
  return (
    <div className="bg-purpleHover flex flex-col p-4 w-2xl max-w-2xl border rounded-lg border-borderOutline">
      <div className="flex justify-between">
        <p className="flex font-mulish font-semibold">{createdAt}</p>
        <p className="font-mulish font-semibold">tbh</p>
      </div>

      <div className="bg-dark rounded-lg p-4 mt-2">
        <span className="text-offWhite font-mulish wrap-break-words">
        {content}
        </span>
      </div>
    </div>
  );
};

export default CustomSentMessageCard;

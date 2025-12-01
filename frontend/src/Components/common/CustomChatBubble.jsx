import React from "react";

const CustomChatBubble = ({content}) => {
  return (
    <div className="bg-purple flex items-center text-base rounded-3xl p-2 px-4">
      {content}
    </div>
  );
};

export default CustomChatBubble;
 
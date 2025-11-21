import React from "react";
import CustomWhisperSection from "../../common/CustomWhisperSection";
import CustomChatSection from "../../common/CustomChatSection";

const ChatPage = () => {
  return (
    <div className="bg-backgroundColor pt-24 h-screen flex justify-center">
      <div className="flex h-full gap-5 py-5">
        <CustomWhisperSection />

        <CustomChatSection />
      </div>
    </div>
  );
};

export default ChatPage;

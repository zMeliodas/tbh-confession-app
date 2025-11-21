import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import CustomChatListCard from "./CustomChatListCard";

const CustomWhisperSection = () => {
  return (
    <div className="bg-cardBg border border-borderColor rounded-lg flex flex-col gap-2 p-4 shadow-2xl">
      <div className="text-primaryTextColor font-mulish font-bold text-2xl">
        Whisper
      </div>

      <div className="relative w-86">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondaryTextColor">
          <IoSearch className="w-6 h-6" />
        </span>

        <input
          type="text"
          placeholder="Search"
          className="bg-textFieldGray text-lg placeholder-secondaryTextColor caret-primaryTextColor text-primaryTextColor border border-borderColor font-mulish rounded-4xl pl-11 p-2 w-full"
        />
      </div>

      <div className="flex flex-col">
        <CustomChatListCard username="cedlemuel" content="hahha" />
      </div>
    </div>
  );
};

export default CustomWhisperSection;

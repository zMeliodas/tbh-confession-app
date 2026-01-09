import React from "react";
import { useState } from "react";

const InputField = ({
  placeholderText,
  label,
  labelTextSize,
  inputType,
  required = false,
  width,
  onChange,
  onKeyDown,
  value,
  isTextarea = false,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  if (isTextarea) {
    return (
      <>
        <label
          className={`${labelTextSize} text-primaryTextColor font-mulish font-bold mt-4`}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          className="w-full h-32 mt-0.5 bg-textFieldBg text-primaryTextColor text-md rounded-md
             p-2 resize-none outline-none
             focus:ring-2 focus:ring-purple overflow-y-auto custom-scroll"
          value={value}
          onChange={handleChange}
        />
      </>
    );
  }

  return (
    <>
      <label
        className={`${labelTextSize} text-primaryTextColor font-mulish font-bold mt-4`}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={inputType}
        onKeyDown={onKeyDown}
        placeholder={placeholderText}
        onChange={handleChange}
        value={value}
        className={`text-sm text-primaryTextColor bg-textFieldBg placeholder:text-secondaryTextColor font-mulish font-light border border-borderColor rounded-md p-2 mt-0.5 h-10 ${width} outline-none focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-purple`}
      />
    </>
  );
};

export default InputField;

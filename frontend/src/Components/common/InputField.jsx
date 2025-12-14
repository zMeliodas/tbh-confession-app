import React from "react";
import { useState } from "react";

const InputField = ({
  placeholderText,
  label,
  labelTextSize,
  inputType,
  required = false,
  width,
  height = "h-10",
  onChange,
  onKeyDown
}) => {

  const handleChange = (e) => {

    if (onChange) {
      onChange(e);
    }
  };

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
        className={`text-sm text-primaryTextColor bg-textFieldBg placeholder:text-secondaryTextColor font-mulish font-light border border-borderColor rounded-md p-2 mt-0.5 ${height} ${width}`}
      />
    </>
  );
};

export default InputField;

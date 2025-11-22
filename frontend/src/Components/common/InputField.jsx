import React from "react";
import { useState } from "react";

const InputField = ({
  placeholderText,
  label,
  labelTextSize,
  inputType,
  required = false,
  width,
}) => {
  const [hasValue, setHasValue] = useState(false);

  return (
    <>
      <label className={`${labelTextSize} text-primaryTextColor font-mulish font-bold mt-4`}>
        {label}
        {required && !hasValue && <span className="text-red-500">*</span>}
      </label>
      <input
        type={inputType}
        placeholder={placeholderText}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`text-sm text-primaryTextColor bg-textFieldBg placeholder:text-secondaryTextColor font-mulish font-light border border-borderColor rounded-md p-2 mt-0.5 h-10 ${width}`}
      />
    </>
  );
};

export default InputField;

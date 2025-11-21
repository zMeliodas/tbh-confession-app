import React from "react";
import { useState } from 'react';

const InputField = ({ placeholderText, label, inputType, required = false }) => {
  const [hasValue, setHasValue] = useState(false);

  return (
    <>
      <label className="text-md text-primaryTextColor font-mulish font-bold mt-6">
        {label}
        {required && !hasValue && <span className="text-red-500">*</span>}
      </label>
      <input
        type={inputType}
        placeholder={placeholderText}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className="text-sm text-primaryTextColor bg-textFieldBg placeholder:text-secondaryTextColor font-mulish font-light border border-borderColor rounded-md p-2 mt-0.5 h-10 w-108"
      />
    </>
  );
};

export default InputField;

import React from "react";
import { FaCheck } from "react-icons/fa6";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";

const GeneralSettings = () => {
  return (
    <>
      <InputField
        placeholderText="ilovecozl"
        label="Username"
        inputType="text"
        width="w-76 sm:w-96 md:w-108"
        required
      />

      <InputField
        label="Prompt"
        inputType="text"
        width="w-76 sm:w-96 md:w-108"
        height="h-30"
        required
      />

      <div className="flex flex-row-reverse mt-6">
        <CustomButtonPurple
          textSize="text-xs"
          padding="p-2"
          text={
            <div className="flex items-center justify-center gap-1">
              <FaCheck className="w-4 h-4 pr-1" />
              <span>Save Changes</span>
            </div>
          }
          width="w-34"
        />
      </div>
    </>
  );
};

export default GeneralSettings;

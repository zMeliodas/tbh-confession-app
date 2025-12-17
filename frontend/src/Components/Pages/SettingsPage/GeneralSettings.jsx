import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import { useAuth } from "../../../providers/AuthProvider";

const GeneralSettings = () => {
  const { user } = useAuth();
  const [currentUserName, setCurrentUserName] = useState(user.user_name);
  const [currentPrompt, setCurrentPrompt] = useState(
    "Send me an anonymous message!"
  );

  return (
    <>
      <InputField
        label="Username"
        inputType="text"
        width="w-76 sm:w-96 md:w-108"
        value={currentUserName}
        onChange={(e) => {
          setCurrentUserName(e.target.value);
        }}
        required
      />

      <InputField
        label="Prompt"
        inputType="text"
        width="w-76 sm:w-96 md:w-108"
        value={currentPrompt}
        onChange={(e) => {
          setCurrentPrompt(e.target.value);
        }}
        paddingBottom="pb-30"
        isTextarea
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

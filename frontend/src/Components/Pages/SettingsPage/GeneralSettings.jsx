import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import CustomButtonGray from "../../common/CustomButtonGray";
import { userApi } from "../../../services/userApi";
import { useAuth } from "../../../providers/AuthProvider";
import { RiImageAddFill } from "react-icons/ri";
import CustomProfilePic from "../../common/CustomProfilePic";

const GeneralSettings = () => {
  const { user, token, updateUser } = useAuth();
  const [newUserName, setNewUserName] = useState(user.user_name);
  const [newPrompt, setNewPrompt] = useState(user.user_prompt || "");

  return (
    <>
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <CustomProfilePic
          userImage={user.image}
          src={user.image}
          username={user.user_name}
          textSize="text-2xl"
          baseSize="w-24 h-24"
        />

        <input type="file" />

        <CustomButtonGray
          textSize="text-xs"
          padding="p-1"
          text={
            <div className="flex items-center justify-center gap-1">
              <RiImageAddFill className="w-5 h-5 pr-1" />
              <span className="font-mulish">Change Avatar</span>
            </div>
          }
          width="w-38"
        />
      </div>

      <InputField
        label="Username"
        inputType="text"
        width="w-76 sm:w-96 md:w-108"
        value={newUserName}
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
        required
      />

      <InputField
        label="Prompt"
        inputType="text"
        width="w-76 sm:w-96 md:w-108"
        value={newPrompt}
        onChange={(e) => {
          setNewPrompt(e.target.value);
        }}
        paddingBottom="pb-30"
        isTextarea
      />

      <div className="flex flex-row-reverse mt-6">
        <CustomButtonPurple
          textSize="text-xs"
          padding="p-2"
          disabled={
            newUserName === user.user_name && newPrompt === user.user_prompt
          }
          text={
            <div className="flex items-center justify-center gap-1">
              <FaCheck className="w-4 h-4 pr-1" />
              <span>Save Changes</span>
            </div>
          }
          onClick={async () => {
            try {
              const updates = {};

              if (newUserName !== user.user_name) {
                await userApi.updateUserName(
                  user.user_name,
                  newUserName,
                  token
                );
                updates.user_name = newUserName;
              }

              if (newPrompt !== user.user_prompt) {
                await userApi.updateUserPrompt(newUserName, newPrompt, token);
                updates.user_prompt = newPrompt;
              }

              if (Object.keys(updates).length > 0) {
                updateUser(updates);
              }
            } catch (error) {
              console.error("Update failed:", error);
              // TODO: Show error message to user
            }
          }}
          width="w-34"
        />
      </div>
    </>
  );
};

export default GeneralSettings;

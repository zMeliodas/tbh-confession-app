import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import InputField from "../../common/InputField";
import CustomSpinner from "src/Components/common/CustomSpinner";
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
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveChanges = async () => {
    if (
      !newUserName ||
      newUserName.trim().length < 3 ||
      newUserName.trim().length > 30
    ) {
      setError("Username is required and must be between 3 and 30 characters");
      return;
    }

    if (newPrompt.trim().length > 500) {
      setError("Prompt must be less than 500 characters");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const updates = {};
      const updatePromises = [];

      if (newUserName !== user.user_name) {
        updatePromises.push(
          userApi.updateUserName(newUserName, token).then(() => {
            updates.user_name = newUserName;
          })
        );
      }

      if (newPrompt !== user.user_prompt) {
        updatePromises.push(
          userApi.updateUserPrompt(newPrompt, token).then(() => {
            updates.user_prompt = newPrompt;
          })
        );
      }

      await Promise.all(updatePromises);

      if (Object.keys(updates).length > 0) {
        updateUser(updates);
        setSuccess("Profile updated successfully!");

        setTimeout(() => setSuccess(null), 3000);
      }
    } catch (error) {
      if (error.response?.data?.error) {
        setError(error.response.data.error);
      } else if (error.message) {
        setError(error.message);
      } else {
        setError("Failed to update profile. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const hasChanges =
    newUserName !== user.user_name || newPrompt !== user.user_prompt;

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
          setError(null);
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
          setError(null);
        }}
        paddingBottom="pb-30"
        isTextarea
      />

      {error && (
        <div className="w-76 sm:w-96 md:w-108 text-red-700 p-2">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {success && (
        <div className="w-76 sm:w-96 md:w-108 text-green-300 pt-2">
          <span className="block sm:inline">{success}</span>
        </div>
      )}

      <div className="flex flex-row-reverse mt-4">
        <CustomButtonPurple
          textSize="text-xs"
          padding="p-2"
          disabled={!hasChanges}
          text={
            <div className="flex items-center justify-center gap-1">
              {isLoading ? (
                <CustomSpinner color="color-white/50" />
              ) : (
                <FaCheck className="w-4 h-4 pr-1" />
              )}
              <span>Save Changes</span>
            </div>
          }
          onClick={handleSaveChanges}
          width="w-34"
        />
      </div>
    </>
  );
};

export default GeneralSettings;

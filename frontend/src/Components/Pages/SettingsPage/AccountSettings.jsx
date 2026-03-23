import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { userApi } from "../../../services/userApi";
import CustomSpinner from "../../common/CustomSpinner";

const AccountSettings = ({ onDeleteAccountClick }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async () => {
    setError(null);
    setSuccess(null);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const result = await userApi.changePassword(
        currentPassword,
        newPassword,
        token,
      );
      setSuccess(result.message);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <InputField
        label="Current Password"
        inputType="password"
        value={currentPassword}
        width="w-full"
        onChange={(e) => {
          setCurrentPassword(e.target.value);
        }}
      />

      <InputField
        label="New Password"
        inputType="password"
        value={newPassword}
        width="w-full"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />

      <InputField
        label="Confirm Password"
        inputType="password"
        value={confirmPassword}
        width="w-full"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />

      {error && <p className="text-red-500 text-sm font-mulish">{error}</p>}
      {success && (
        <p className="text-green-300 text-sm font-mulish">{success}</p>
      )}

      <div className="flex flex-row-reverse mt-6">
        <CustomButtonPurple
          textSize="text-xs"
          padding="p-2"
          text={
            <div className="flex items-center justify-center gap-1">
              {isLoading ? (
                <CustomSpinner />
              ) : (
                <FaKey className="w-4 h-4 pr-1" />
              )}
              <span className="font-mulish">Set Password</span>
            </div>
          }
          width="w-34"
          onClick={handleChangePassword}
        />
      </div>

      <div className="border-t-2 border-dashed border-muted pt-8 mt-8 text-customGray">
        <div className="border-2 rounded-xl p-4">
          <p className="font-mulish font-bold tracking-tight text-primaryTextColor">
            Danger Zone
          </p>
          <div>
            <span className="font-mulish text-primaryTextColor text-light text-sm">
              This action will permanently delete your profile and messages. All
              of your data will be removed from our servers forever.
            </span>
            <button
              className="border-2 p-2 rounded-lg text-red-500 mt-4 w-full hover:bg-hoverColorNav"
              type="button"
              onClick={onDeleteAccountClick}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;

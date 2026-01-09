import InputField from "../common/InputField";
import { IoCloseOutline } from "react-icons/io5";
import { userApi } from "../../services/userApi";
import { useAuth } from "../../providers/AuthProvider";
import { useState } from "react";

const DeleteAccountModal = ({ onClose }) => {
  const { token, logout } = useAuth();
  const [confirmationText, setConfirmationText] = useState("");
  const isDisabled = confirmationText !== "delete my account";

  const handleDeleteAccount = async () => {
    try {
      await userApi.deleteUser(token);
      logout();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed flex h-full w-full justify-center content-center items-center bg-black/50 transition p-4 z-10">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start items-start border rounded-xl border-borderColor">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl md:text-2xl  text-primaryTextColor font-mulish font-bold">
            Are you absolutely sure?
          </h1>

          <button
            onClick={onClose}
            className="text-lg text-primaryTextColor flex content-center justify-center font-medium bg-transparent font-mulish border-transparent w-12 rounded-lg cursor-pointer"
          >
            <IoCloseOutline className="w-6 h-6" />
          </button>
        </div>

        <p className="text-xs md:text-sm font-mulish text-primaryTextColor pt-2">
          This will permanently delete your account and remove your data{" "}
          <br className="hidden sm:block" />
          from our servers. Type{" "}
          <span className="text-red-500">"delete my account"</span> to confirm.
        </p>

        <InputField
          width="w-full"
          placeholderText="Enter confirmation text"
          onChange={(e) => {
            setConfirmationText(e.target.value);
          }}
          value={confirmationText}
          inputType="text"
        />

        <button
          onClick={handleDeleteAccount}
          className={`text-sm font-medium font-mulish border w-full p-2 mt-4 border-borderColor rounded-xl  ${
            isDisabled
              ? "bg-greyButton/50 text-primaryTextColor/60 cursor-not-allowed"
              : "bg-greyButton text-red-500 cursor-pointer hover:bg-hoverColorNav"
          }`}
          disabled={isDisabled}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;

import InputField from "../common/InputField";
import { IoCloseOutline } from "react-icons/io5";
import { userApi } from "../../services/userApi";
import { useAuth } from "../../providers/AuthProvider";
import { useState, useEffect } from "react";

const DeleteAccountModal = ({ isOpen, onClose }) => {
  const { token, logout } = useAuth();

  const [confirmationText, setConfirmationText] = useState("");
  const [visible, setVisible] = useState(false);

  const isDisabled = confirmationText !== "delete my account";

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

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
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 p-4 ${
        visible ? "bg-black/30" : "bg-black/0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-cardBg flex flex-col p-4 border rounded-xl border-borderColor transition-all duration-300 ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl md:text-2xl text-primaryTextColor font-mulish font-bold">
            Are you absolutely sure?
          </h1>

          <button
            onClick={onClose}
            className="w-12 flex justify-center"
          >
            <IoCloseOutline className="w-6 h-6 text-primaryTextColor" />
          </button>
        </div>

        <p className="text-xs md:text-sm font-mulish text-primaryTextColor pt-2">
          This will permanently delete your account and remove your data
          <br className="hidden sm:block" />
          from our servers. Type{" "}
          <span className="text-red-500">"delete my account"</span> to confirm.
        </p>

        <InputField
          width="w-full"
          placeholderText="Enter confirmation text"
          value={confirmationText}
          onChange={(e) => setConfirmationText(e.target.value)}
          inputType="text"
        />

        <button
          onClick={handleDeleteAccount}
          disabled={isDisabled}
          className={`text-sm font-medium border w-full p-2 mt-4 rounded-xl ${
            isDisabled
              ? "bg-greyButton/50 text-primaryTextColor/60 cursor-not-allowed"
              : "bg-greyButton text-red-500 hover:bg-hoverColorNav"
          }`}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
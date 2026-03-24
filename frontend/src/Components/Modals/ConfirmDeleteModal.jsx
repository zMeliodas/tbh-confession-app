import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 p-4 ${
        visible ? "bg-black/30" : "bg-black/0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-cardBg flex flex-col p-4 border rounded-xl border-borderColor transition-all duration-300 w-80 ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl md:text-2xl text-primaryTextColor font-mulish font-bold">
            Delete Message
          </h1>
          <button onClick={onClose} className="w-12 flex justify-center">
            <IoCloseOutline className="w-6 h-6 text-primaryTextColor" />
          </button>
        </div>

        <p className="text-xs md:text-sm font-mulish text-primaryTextColor pt-2">
          Are you sure you want to delete this message? This action cannot be undone.
        </p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={onClose}
            className="text-sm font-medium border w-full p-2 rounded-xl bg-greyButton text-primaryTextColor hover:bg-hoverColorNav"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="text-sm font-medium border w-full p-2 rounded-xl bg-greyButton text-red-500 hover:bg-hoverColorNav"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
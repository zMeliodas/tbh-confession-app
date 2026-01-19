import { useState, useEffect, useRef } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import CustomChatBubble from "./CustomChatBubble";
import { useAuth } from "../../providers/AuthProvider";
import { userApi } from "../../services/userApi";
import CustomProfilePic from "./CustomProfilePic";

const CustomSendAMessageCard = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("type your recipient here");
  const [recipientData, setRecipientData] = useState({
    user_name: "X",
    user_prompt: "No user selected",
    image: null,
  });
  const [isEditingRecipient, setIsEditingRecipient] = useState(false);
  const inputRef = useRef(null);
  const { token } = useAuth();

  const DEFAULT_RECIPIENT_DATA = {
    user_name: "X",
    user_prompt: "No user selected",
    image: null,
  };

  useEffect(() => {
    if (isEditingRecipient && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingRecipient]);

  const getRecipient = async (recipient) => {
    if (!recipient || recipient.length < 3) {
      setRecipientData(DEFAULT_RECIPIENT_DATA);
      return;
    }

    setRecipientData({
      user_name: "X",
      user_prompt: "Loading...",
      image: null,
    });

    try {
      const result = await userApi.getRecipient(recipient, token);

      if (result.success && result.data) {
        setRecipientData(result.data);
      } else {
        setRecipientData(DEFAULT_RECIPIENT_DATA);
      }
    } catch (error) {
      setRecipientData(DEFAULT_RECIPIENT_DATA);
    }
  };

  const handleSubmitMessage = async () => {
    try {
      await userApi.sendConfession(recipient, message, token);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecipientSubmit = () => {
    const trimmedRecipient = recipient.trim();

    if (trimmedRecipient && trimmedRecipient !== "type your recipient here") {
      getRecipient(trimmedRecipient);
      setIsEditingRecipient(false);
    } else {
      setRecipientData(DEFAULT_RECIPIENT_DATA);
      setIsEditingRecipient(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRecipientSubmit();
    } else if (e.key === "Escape") {
      setIsEditingRecipient(false);
    }
  };

  return (
    <div className="bg-cardBg rounded-2xl w-full sm:w-2xl mx-4 border border-borderColor overflow-hidden">
      <div className="bg-purple border-b border-borderColor px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-offWhite">
          <span className="text-sm font-mulish select-none">To:</span>
          {isEditingRecipient ? (
            <input
              ref={inputRef}
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value.trim())}
              onBlur={handleRecipientSubmit}
              onKeyDown={handleKeyDown}
              className="bg-purple text-white font-mulish font-bold outline-none border-b border-white px-1 py-1"
            />
          ) : (
            <button
              onClick={() => {
                setIsEditingRecipient(true);
              }}
              className="text-white font-mulish font-bold hover:bg-purple py-1 rounded"
            >
              @{recipient}
            </button>
          )}
          <button>
            <FiShare2 className="w-4 h-4 cursor-pointer duration-200 ease-in-out select-none hover:scale-110" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-3 bg-promptContainer rounded-lg px-4 py-3">
          <div className="w-8 h-8 bg-textFieldGray rounded-lg flex items-center justify-center">
            <CustomProfilePic
              userImage={recipientData.image}
              src={recipientData.image}
              username={recipientData.user_name}
              baseSize="w-8 h-8"
              textSize="text-lg"
            />
          </div>
          <span className="text-primaryTextColor font-medium font-mulish select-none break-all">
            {recipientData.user_prompt}
          </span>
        </div>
      </div>

      <div className="flex flex-col-reverse items-end pt-2 p-6 gap-0.5 h-56 overflow-y-auto custom-scroll">
        <CustomChatBubble content="Hi kuys" />
        <CustomChatBubble content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis facilis error labore ipsum assumenda officia, temporibus natus exercitationem voluptatum. Tempora itaque ea mollitia, magni placeat incidunt dolor nesciunt saepe." />
        <CustomChatBubble content="Ano gawa mo kupal?" />
        <CustomChatBubble content="shabu pa nigga" />
      </div>

      <div className="px-6 pb-6 pt-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full sm:flex-1 bg-textFieldBg text-primaryTextColor font-mulish placeholder-secondaryTextColor rounded-lg px-4 py-3 border border-borderColor outline-gray"
          />
          <button
            onClick={handleSubmitMessage}
            className="bg-purple hover:bg-purpleHover cursor-pointer text-offWhite rounded-lg px-4 py-3 flex items-center justify-center transition-colors"
          >
            <IoPaperPlaneOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSendAMessageCard;

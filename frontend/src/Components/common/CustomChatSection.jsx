import { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useAuth } from "src/providers/AuthProvider.jsx";
import CustomProfilePic from "./CustomProfilePic";

const CustomChatSection = () => {
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  return (
    <>
      <div className="bg-cardBg border border-borderColor rounded-lg flex flex-col gap-2 shadow-2xl">
        <div className="flex justify-start border-b border-borderColor gap-2 px-4 py-4 w-full">
          <CustomProfilePic
            userImage={user.image}
            src={user.image}
            username={user.user_name}
            baseSize="w-8 h-8"
            textSize="text-lg"
          />
          <span className="text-primaryTextColor font-mulish font-bold pt-0.5">
            {user.user_name}
          </span>
        </div>

        <div className="flex h-full gap-10 p-2">
          <div>asdjkahsdjkhsa</div>

          <div>asdjkahsdjkhsa</div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-textFieldBg text-primaryTextColor font-mulish placeholder-secondaryTextColor rounded-lg px-4 py-3 border border-borderColor outline-gray w-6xl"
            />
            <button className="bg-purple hover:bg-purpleHover cursor-pointer text-white rounded-lg px-4 py-3 flex items-center justify-center transition-colors">
              <IoPaperPlaneOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomChatSection;

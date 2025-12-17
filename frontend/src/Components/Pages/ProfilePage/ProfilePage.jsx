import { useState, Activity } from "react";
import { IoLinkSharp } from "react-icons/io5";
import CustomTabButton from "src/Components/common/CustomTabButton";
import CustomReceivedMessageCard from "src/Components/common/CustomReceivedMessageCard";
import { useAuth } from "../../../providers/AuthProvider";
import { getInitials } from "../../../utils/getInitials.js";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("received");

  const { user } = useAuth();

  return (
    <div className="bg-backgroundColor text-primaryTextColor flex flex-col items-center pt-24 min-h-screen">
      <div className="bg-cardBg flex flex-col py-4 px-4 mb-8 mx-8 w-88 justify-center items-center content-center border rounded-xl border-borderColor sm:w-xl md:w-3xl lg:w-5xl">
        <div className="flex flex-col items-center space-y-4">
          {user.image ? (
            <img
              src=""
              alt="Profile"
              className="w-14 h-14 sm:w-24 sm:h-20 md:w-20 md:h-24 rounded-full object-cover select-none"
            />
          ) : (
            <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-purple text-primaryTextColor flex items-center justify-center text-2xl select-none font-semibold">
              {getInitials(user.user_name)}
            </div>
          )}

          <h2 className="text-md sm:text-lg md:text-xl text-primaryTextColor font-mulish font-semibold">
            @{user.user_name}
          </h2>

          <div className="bg-linkContainer px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-1 cursor-pointer select-none hover:bg-purpleHover transition-colors duration-200">
            <IoLinkSharp className="pt-1 w-5 h-5" />
            <span className="text-primaryTextColor text-xs md:text-sm font-mulish">
              www.tbh.link/{user.user_name}
            </span>
          </div>
        </div>

        <div className="flex mt-4 mb-4 border-b border-borderColor">
          <CustomTabButton
            width="w-28 md:w-46"
            textSize="text-sm md:text-md"
            text="Received"
            isActive={activeTab === "received"}
            onClick={() => setActiveTab("received")}
          />
          <CustomTabButton
            width="w-28 md:w-46"
            textSize="text-sm md:text-md"
            text="Sent"
            isActive={activeTab === "sent"}
            onClick={() => setActiveTab("sent")}
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <CustomReceivedMessageCard content="HI NIGGAS" />
        </div>

        <div className="mt-6 text-offWhite text-center">
          <Activity mode={activeTab === "received" ? "visible" : "hidden"}>
            <p className="text-primaryTextColor font-mulish">
              No received messages yet.
            </p>
          </Activity>

          <Activity mode={activeTab === "sent" ? "visible" : "hidden"}>
            <p className="text-primaryTextColor font-mulish">
              No sent messages yet.
            </p>
          </Activity>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

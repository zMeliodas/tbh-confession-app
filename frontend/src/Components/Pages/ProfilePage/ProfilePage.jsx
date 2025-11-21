import { useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import CustomTabButton from "src/Components/common/CustomTabButton";
import CustomReceivedMessageCard from "src/Components/common/CustomReceivedMessageCard";
import { getUserInfo } from "../../../providers/UserProvider";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("received");

  const {user, getInitials} = getUserInfo();

  return (
    <div className="h-screen bg-backgroundColor text-primaryTextColor flex flex-col items-center pt-24 overflow-y-auto">
      <div className="bg-cardBg flex flex-col px-48 py-4 mb-8 w-5xl justify-center items-center content-center border rounded-xl border-borderColor">
        <div className="flex flex-col items-center space-y-4">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover select-none"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-purple text-primaryTextColor flex items-center justify-center text-2xl select-none font-semibold">
              {getInitials(user.username)}
            </div>
          )}

          <h2 className="text-xl text-primaryTextColor font-mulish font-semibold">
            @{user.username}
          </h2>

          <div className="bg-linkContainer px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer select-none hover:bg-purpleHover transition-colors duration-200">
            <IoLinkSharp className="pt-1 w-5 h-5" />
            <span className="text-primaryTextColor text-sm font-mulish">
              www.tbh.link/to/cedlemuel
            </span>
          </div>
        </div>

        <div className="flex mt-8 mb-4 border-b border-borderColor">
          <CustomTabButton
            text="Received"
            isActive={activeTab === "received"}
            onClick={() => setActiveTab("received")}
          />
          <CustomTabButton
            text="Sent"
            isActive={activeTab === "sent"}
            onClick={() => setActiveTab("sent")}
          />
        </div>

        <div className="w-full">
          <CustomReceivedMessageCard />
        </div>

        <div className="mt-6 text-offWhite text-center">
          {activeTab === "received" ? (
            <p className="text-primaryTextColor font-mulish">
              No received messages yet.
            </p>
          ) : (
            <p className="text-primaryTextColor font-mulish">
              No sent messages yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

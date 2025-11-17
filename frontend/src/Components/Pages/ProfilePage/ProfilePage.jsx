import { useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import CustomTabButton from "src/Components/common/CustomTabButton";
import CustomReceivedMessageCard from "src/Components/common/CustomReceivedMessageCard";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("received");

  const user = {
    username: "cedlemuel",
    image: "",
    link: "www.tbh.link/to/cedlemuel",
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <div className="h-screen bg-dark text-offWhite flex flex-col items-center pt-24 overflow-y-auto">
      <div className="bg-cardBg flex flex-col px-48 py-4 mb-8 w-5xl justify-center items-center content-center border rounded-xl border-borderOutline">
        <div className="flex flex-col items-center space-y-4">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover select-none"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-pink flex items-center justify-center text-2xl select-none font-semibold text-offWhite">
              {getInitials(user.username)}
            </div>
          )}

          <h2 className="text-xl text-offWhite font-mulish font-semibold">
            @{user.username}
          </h2>

          <div className="bg-customHoverGray px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer select-none hover:bg-pinkHover transition-colors duration-200">
            <IoLinkSharp className="pt-1 w-5 h-5" />
            <span className="text-offWhite text-sm font-mulish">
              www.tbh.link/to/cedlemuel
            </span>
          </div>
        </div>

        <div className="flex mt-8 mb-4 border-b border-borderOutline">
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
            <p className="text-textColorNav font-mulish">
              No received messages yet.
            </p>
          ) : (
            <p className="text-textColorNav font-mulish">
              No sent messages yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

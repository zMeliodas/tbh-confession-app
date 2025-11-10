import { useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import CustomTabButton from "src/Components/common/CustomTabButton";
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
    <div className="h-screen bg-dark text-offWhite flex flex-col items-center pt-24">
      <div className="bg-cardBg flex flex-col px-48 py-4 justify-start content-start border rounded-xl border-borderOutline">
        <div className="flex flex-col items-center space-y-4">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-customBrown flex items-center justify-center text-2xl font-semibold text-white">
              {getInitials(user.username)}
            </div>
          )}

          <h2 className="text-xl font-semibold">@{user.username}</h2>

          <div className="bg-customBrown2 px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer hover:bg-customBrown transition-colors duration-200">
            <IoLinkSharp className="pt-1 w-5 h-5" />
            <span className="text-sm">www.tbh.link/to/cedlemuel</span>
          </div>
        </div>

        <div className="flex mt-10 border-b border-borderOutline w-full max-w-md">
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

        <div className="mt-6 w-full max-w-md text-center">
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

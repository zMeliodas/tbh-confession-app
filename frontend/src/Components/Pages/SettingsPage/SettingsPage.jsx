import { Activity } from "react";
import CustomButtonGray from "../../common/CustomButtonGray";
import CustomTabButton from "../../common/CustomTabButton";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import GeneralSettings from "./GeneralSettings";
import AccountSettings from "./AccountSettings";
import { useAuth } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24 overflow-auto px-8">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor max-w-124">
        <div className="flex flex-row">
          <h1 className="flex-1 text-3xl text-primaryTextColor font-mulish font-bold">
            Settings
          </h1>

          <CustomButtonGray
            textSize="text-xs"
            text="Sign Out"
            width="w-28"
            icon={
              <FiLogOut className="text-offWhite inline-block w-6 h-6 pr-2" />
            }
            onClick={() => {
              logout();
              navigate("/login", { replace: true });
            }}
          />
        </div>

        <div className="flex w-74 md:w-92">
          <p className="text-sm md:text-base text-secondaryTextColor font-mulish font-light wrap-break-word">
            Manage your account settings
          </p>
        </div>

        <div className="flex mt-8 mb-4 border-b border-borderColor">
          <CustomTabButton
            width="w-12"
            textSize="text-sm md:text-md"
            text="General"
            isActive={activeTab === "general"}
            onClick={() => setActiveTab("general")}
          />
          <CustomTabButton
            width="w-12"
            textSize="text-sm md:text-md"
            text="Account"
            isActive={activeTab === "account"}
            onClick={() => setActiveTab("account")}
          />
        </div>

        <Activity mode={activeTab === "general" ? "visible" : "hidden"}>
          <GeneralSettings />
        </Activity>

        <Activity mode={activeTab === "account" ? "visible" : "hidden"}>
          <AccountSettings />
        </Activity>
      </div>
    </main>
  );
};

export default SettingsPage;

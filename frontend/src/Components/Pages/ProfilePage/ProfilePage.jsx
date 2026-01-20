import { useState, Activity, useEffect } from "react";
import { IoLinkSharp } from "react-icons/io5";
import CustomTabButton from "src/Components/common/CustomTabButton";
import CustomReceivedMessageCard from "src/Components/common/CustomReceivedMessageCard";
import { useAuth } from "../../../providers/AuthProvider";
import CustomProfilePic from "../../common/CustomProfilePic.jsx";
import { userApi } from "../../../services/userApi.js";
import CustomSentMessageCard from "../../common/CustomSentMessageCard.jsx";
import { formatDate } from "../../../utils/stringUtils.js";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("received");
  const [sentConfessions, setSentConfessions] = useState([]);
  const [receivedConfessions, setReceivedConfessions] = useState([]);
  const [sentStatus, setSentStatus] = useState("");
  const [receivedStatus, setReceivedStatus] = useState("");

  const { user, token } = useAuth();

  const getSentConfessions = async () => {
    try {
      const result = await userApi.getSentConfessions(token);
      setSentConfessions(result.data);
      setSentStatus(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getReceivedConfessions = async () => {
    try {
      const result = await userApi.getReceivedConfessions(token);
      setReceivedConfessions(result.data);
      setReceivedStatus(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSentConfessions();
    getReceivedConfessions();
  }, []);

  return (
    <div className="bg-backgroundColor text-primaryTextColor flex flex-col items-center pt-24 min-h-screen">
      <div className="bg-cardBg flex flex-col py-4 px-4 mb-8 mx-8 w-88 justify-center items-center content-center border rounded-xl border-borderColor sm:w-xl md:w-3xl lg:w-5xl">
        <div className="flex flex-col items-center space-y-4">
          <CustomProfilePic
            userImage={user.image}
            src={user.image}
            username={user.user_name}
            textSize="text-2xl"
            baseSize="w-14 h-14"
            smSize="sm:w-20 sm:h-20"
            mdSize="md:w-24 md:h-24"
          />

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

        <div className="flex mt-4 mb-2 border-b border-borderColor">
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

        <div className="mt-2 text-offWhite text-center">
          <Activity mode={activeTab === "received" ? "visible" : "hidden"}>
            {!receivedConfessions ? (
              <p className="text-primaryTextColor font-mulish">
                {receivedStatus}
              </p>
            ) : (
              receivedConfessions.map((confession) => (
                <CustomReceivedMessageCard
                  key={confession.message_id}
                  content={confession.content}
                  createdAt={formatDate(confession.created_at)}
                />
              ))
            )}
          </Activity>

          <Activity mode={activeTab === "sent" ? "visible" : "hidden"}>
            {!sentConfessions ? (
              <p className="text-primaryTextColor font-mulish">{sentStatus}</p>
            ) : (
              sentConfessions.map((confession) => (
                <CustomSentMessageCard
                  key={confession.message_id}
                  content={confession.content}
                  createdAt={formatDate(confession.created_at)}
                  recipient={confession.user_name}
                />
              ))
            )}
          </Activity>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

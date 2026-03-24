import { useState, Activity, useEffect, useRef } from "react";
import { IoLinkSharp } from "react-icons/io5";
import CustomTabButton from "src/Components/common/CustomTabButton";
import CustomReceivedMessageCard from "src/Components/common/CustomReceivedMessageCard";
import { useAuth } from "../../../providers/AuthProvider";
import CustomProfilePic from "../../common/CustomProfilePic.jsx";
import { userApi } from "../../../services/userApi.js";
import CustomSentMessageCard from "../../common/CustomSentMessageCard.jsx";
import { formatDate } from "../../../utils/stringUtils.js";
import { io } from "socket.io-client";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal.jsx";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("received");
  const [sentConfessions, setSentConfessions] = useState([]);
  const [receivedConfessions, setReceivedConfessions] = useState([]);
  const [sentStatus, setSentStatus] = useState("");
  const [receivedStatus, setReceivedStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const { user, token } = useAuth();
  const socketRef = useRef(null);
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    messageId: null,
    type: null,
  });

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

  const handleCopyLink = () => {
    const link = `${window.location.origin}/confess/${user.user_name}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    getSentConfessions();
    getReceivedConfessions();
  }, []);

  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_API_URL);
    socketRef.current.emit("login", user.user_id);

    socketRef.current.on("newMessage", (msg) => {
      if (msg.receiverUsername === user.user_name) {
        setReceivedConfessions((prev) => [msg, ...prev]);
      }
      if (msg.senderId === user.user_id) {
        setSentConfessions((prev) => [msg, ...prev]);
      }
    });

    return () => socketRef.current.disconnect();
  }, [user]);

  const handleDeleteClick = (messageId, type) => {
    setDeleteModal({ show: true, messageId, type });
  };

  const handleConfirmDelete = async () => {
    const { messageId, type } = deleteModal;
    try {
      if (type === "sent") {
        await userApi.deleteSentMessage(messageId, token);
        setSentConfessions((prev) =>
          prev.filter((m) => m.message_id !== messageId),
        );
      } else {
        await userApi.deleteReceivedMessage(messageId, token);
        setReceivedConfessions((prev) =>
          prev.filter((m) => m.message_id !== messageId),
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteModal({ show: false, messageId: null, type: null });
    }
  };

  return (
    <div className="bg-backgroundColor text-primaryTextColor flex flex-col items-center pt-24 min-h-screen">
      <ConfirmDeleteModal
        isOpen={deleteModal.show}
        onClose={() =>
          setDeleteModal({ show: false, messageId: null, type: null })
        }
        onConfirm={handleConfirmDelete}
      />

      <div className="bg-cardBg flex flex-col py-4 px-4 mb-8 mx-8 w-88 justify-center items-center content-center border rounded-xl border-borderColor sm:w-xl md:w-3xl lg:w-5xl">
        <div className="flex flex-col items-center space-y-4">
          <CustomProfilePic
            src={user.user_image}
            username={user.user_name}
            textSize="text-2xl"
            baseSize="w-14 h-14"
            smSize="sm:w-20 sm:h-20"
            mdSize="md:w-24 md:h-24"
          />

          <h2 className="text-md sm:text-lg md:text-xl text-primaryTextColor font-mulish font-semibold">
            @{user.user_name}
          </h2>

          <div
            onClick={handleCopyLink}
            className="bg-linkContainer px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-1 cursor-pointer select-none hover:bg-purpleHover transition-colors duration-200"
          >
            <IoLinkSharp className="w-4 h-4" />
            <span className="text-primaryTextColor text-xs md:text-sm font-mulish font-semibold">
              {copied
                ? "Copied!"
                : `${window.location.origin}/confess/${user.user_name}`}
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
            {receivedConfessions.length === 0 ? (
              <p className="text-primaryTextColor font-mulish">
                {receivedStatus}
              </p>
            ) : (
              receivedConfessions.map((confession) => (
                <CustomReceivedMessageCard
                  key={confession.message_id}
                  content={confession.content}
                  createdAt={formatDate(confession.created_at)}
                  onDelete={() =>
                    handleDeleteClick(confession.message_id, "received")
                  }
                />
              ))
            )}
          </Activity>

          <Activity mode={activeTab === "sent" ? "visible" : "hidden"}>
            {sentConfessions.length === 0 ? (
              <p className="text-primaryTextColor font-mulish">{sentStatus}</p>
            ) : (
              sentConfessions.map((confession) => (
                <CustomSentMessageCard
                  key={confession.message_id}
                  content={confession.content}
                  createdAt={formatDate(confession.created_at)}
                  recipient={confession.user_name}
                  onDelete={() =>
                    handleDeleteClick(confession.message_id, "sent")
                  }
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

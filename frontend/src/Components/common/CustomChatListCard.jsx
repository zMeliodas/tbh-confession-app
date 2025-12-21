import { useAuth } from "src/providers/AuthProvider.jsx";
import CustomProfilePic from "./CustomProfilePic";

const CustomChatListCard = ({ username, content }) => {
  const { user } = useAuth();

  return (
    <div className="flex justify-start rounded-lg border-borderColor gap-2 px-2 py-2 w-full cursor-pointer hover:bg-secondaryTextColor/40">
      <CustomProfilePic
        userImage={user.image}
        src={user.image}
        username={user.user_name}
        textSize="text-lg"
        baseSize="w-12 h-12"
      />
      <div className="flex flex-col">
        <span className="text-primaryTextColor font-mulish font-bold">
          {username}
        </span>
        <span className="text-primaryTextColor font-mulish font-light">
          {content}
        </span>
      </div>
    </div>
  );
};

export default CustomChatListCard;

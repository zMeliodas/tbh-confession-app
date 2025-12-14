import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import { FaKey } from "react-icons/fa";

const AccountSettings = () => {
  return (
    <>
      <InputField
        label="New Password"
        inputType="text"
        width="w-full"
      />

      <InputField
        label="Confirm Password"
        inputType="text"
        width="w-full"
      />

      <div className="flex flex-row-reverse mt-6">
        <CustomButtonPurple
          textSize="text-xs"
          padding="p-2"
          text={
            <div className="flex items-center justify-center gap-1">
              <FaKey className="w-4 h-4 pr-1" />
              <span>Set Password</span>
            </div>
          }
          width="w-34"
        />
      </div>

      <div className="border-t-2 border-dashed border-muted pt-8 mt-8 text-customGray">
        <div className="border-2 rounded-xl p-4">
          <p class="font-mulish font-bold tracking-tight text-primaryTextColor">Danger Zone</p>
          <div>
            <span className="font-mulish text-primaryTextColor text-light text-sm">
              This action will permanently delete your profile and messages. All
              of your data will be removed from our servers forever.
            </span>
            <button
              className="border-2 p-2 rounded-lg text-red-500 mt-4 w-full hover:bg-hoverColorNav"
              type="button"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;

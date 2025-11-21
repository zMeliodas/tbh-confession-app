
import InputField from "src/Components/common/InputField";
import CustomButtonGray from "src/Components/common/CustomButtonGray";
import CustomButtonPurple from "src/Components/common/CustomButtonPurple";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor">
        <h1 className="text-3xl text-primaryTextColor font-mulish font-bold">
          TBH Account
        </h1>
        <h2 className="text-md text-secondaryTextColor font-mulish font-light">
          By creating an account, you agree to our{" "}
          <span className="text-md text-secondaryTextColor font-mulish font-bold whitespace-nowrap cursor-pointer">
            Privacy Policy{" "}
          </span>
          <span className="text-md text-secondaryTextColor font-mulish font-light">
            and{" "}
          </span>
        </h2>
        <span className="text-md text-secondaryTextColor font-mulish font-bold cursor-pointer">
          Terms of Service
        </span>

        <InputField
          placeholderText="ilovecozl"
          label="Username"
          inputType="text"
          required
        />
        <InputField label="Password" inputType="password" required />
        <InputField label="Confirm Password" inputType="password" required />

        <div className="mt-4">
          <CustomButtonPurple padding="p-1" text="Login" width="w-108" />
        </div>

        <div className="mt-2">
          <CustomButtonGray
            padding="p-1"
            text="Continue with Google"
            width="w-108"
          />
        </div>

        <span className="text-md font-light font-mulish text-primaryTextColor text-center mt-4 whitespace-nowrap">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-md font-light font-mulish text-primaryTextColor hover:underline"
          >
            Sign In
          </Link>
        </span>
      </div>
    </main>
  );
};

export default RegisterPage;

import InputField from "src/Components/common/InputField";
import CustomButtonGray from "src/Components/common/CustomButtonGray";
import CustomButtonPurple from "src/Components/common/CustomButtonPurple";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24 overflow-auto">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor max-w-116">
        <h1 className="text-3xl text-primaryTextColor font-mulish font-bold">
          TBH Account
        </h1>

        <div className="flex w-74 md:w-92">
          <p className="text-sm md:text-md text-secondaryTextColor font-mulish font-light wrap-break-word">
            By creating an account, you agree to our{" "}
            <span className="text-sm md:text-md text-secondaryTextColor font-mulish font-bold cursor-pointer">
              Privacy Policy{" "}
            </span>
            and{" "}
            <span className="text-sm md:text-md text-secondaryTextColor font-mulish font-bold cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>

        <InputField
          placeholderText="ilovecozl"
          label="Username"
          inputType="text"
          width="w-76 sm:w-96 md:w-108"
          required
        />
        <InputField
          label="Password"
          inputType="password"
          width="w-76 sm:w-96 md:w-108"
          required
        />
        <InputField
          label="Confirm Password"
          inputType="password"
          width="w-76 sm:w-96 md:w-108"
          required
        />

        <div className="mt-4">
          <CustomButtonPurple
            textSize="text-md md:text-lg"
            padding="p-1"
            text="Login"
            width="w-76 sm:w-96 md:w-108"
          />
        </div>

        <div className="mt-2">
          <CustomButtonGray
            textSize="text-md md:text-lg"
            padding="p-1"
            text="Continue with Google"
            width="w-76 sm:w-96 md:w-108"
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

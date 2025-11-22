import React from "react";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import CustomButtonGray from "../../common/CustomButtonGray";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24 overflow-auto">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor">
        <h1 className="text-2xl md:text-3xl text-primaryTextColor font-mulish font-bold">
          TBH Account
        </h1>
        <h2 className="text-sm md:text-md text-secondaryTextColor font-mulish font-light">
          Proceed with your TBH Account
        </h2>

        <InputField label="Username" labelTextSize="text-sm md:text-md" inputType="text" width="w-76 sm:w-96 md:w-108"/>
        <InputField label="Password" labelTextSize="text-sm md:text-md" inputType="password" width="w-76 sm:w-96 md:w-108" />

        <div className="mt-4">
          <CustomButtonPurple textSize="text-md md:text-lg" padding="p-1" text="Login" width="w-76 sm:w-96 md:w-108" />
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
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-md font-light font-mulish text-primaryTextColor hover:underline"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </main>
  );
};

export default LoginPage;

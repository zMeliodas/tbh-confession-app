import React from "react";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import CustomButtonGray from "../../common/CustomButtonGray";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor">
        <h1 className="text-3xl text-primaryTextColor font-mulish font-bold">
          TBH Account
        </h1>
        <h2 className="text-md text-secondaryTextColor font-mulish font-light">
          Proceed with your TBH Account
        </h2>

        <InputField label="Username" inputType="text" />
        <InputField label="Password" inputType="password" />

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

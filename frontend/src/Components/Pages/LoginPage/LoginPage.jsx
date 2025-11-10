import React from "react";
import InputField from "../../common/InputField";
import CustomButtonPink from "../../common/CustomButtonPink";
import CustomButtonGray from "../../common/CustomButtonGray";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="bg-dark flex flex-col items-center h-screen pt-24">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderOutline">
        <h1 className="text-3xl  text-offWhite font-mulish font-bold">
          TBH Account
        </h1>
        <h2 className="text-md text-secondaryColorGray font-mulish font-light">
          Proceed with your TBH Account
        </h2>

        <InputField label="Username" inputType="text" />
        <InputField label="Password" inputType="password" />

        <div className="mt-4">
          <CustomButtonPink padding="p-1" text="Login" width="w-108" />
        </div>

        <div className="mt-2">
          <CustomButtonGray
            padding="p-1"
            text="Continue with Google"
            width="w-108"
          />
        </div>

        <span className="text-md font-light font-mulish text-offWhite text-center mt-4 whitespace-nowrap">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-md font-light font-mulish text-offWhite underline"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </main>
  );
};

export default LoginPage;

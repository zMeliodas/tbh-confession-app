import { useState } from "react";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import CustomButtonGray from "../../common/CustomButtonGray";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (field) => (e) => {
    setLoginCredentials({ ...setLoginCredentials, [field]: e.target.value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleLoginClick = () => {
    const newErrors = {};

    if (loginCredentials.username.trim().length === 0) {
      newErrors.username = "Username is required";
    }

    if (loginCredentials.password.trim().length === 0) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;

    if (!hasErrors) {
      // proceed with registration API call
      console.log("All fields valid, submit form");
    }
  };

  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24 overflow-auto">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor">
        <h1 className="text-2xl md:text-3xl text-primaryTextColor font-mulish font-bold">
          TBH Account
        </h1>
        <h2 className="text-sm md:text-base text-secondaryTextColor font-mulish font-light">
          Proceed with your TBH Account
        </h2>

        <InputField
          label="Username"
          labelTextSize="text-sm md:text-base"
          inputType="text"
          width="w-76 sm:w-96 md:w-108"
          onChange={handleInputChange("username")}
        />
        {errors.username && (
          <span className="font-mulish font-base text-red-400">
            {errors.username}
          </span>
        )}

        <InputField
          label="Password"
          labelTextSize="text-sm md:text-base"
          inputType="password"
          width="w-76 sm:w-96 md:w-108"
          onChange={handleInputChange("password")}
        />
        {errors.password && (
          <span className="font-mulish font-base text-red-400">
            {errors.password}
          </span>
        )}

        <div className="mt-4">
          <CustomButtonPurple
            textSize="text-base md:text-lg"
            padding="p-1"
            text="Login"
            width="w-76 sm:w-96 md:w-108"
            onClick={handleLoginClick}
          />
        </div>

        <div className="mt-2">
          <CustomButtonGray
            textSize="text-base md:text-lg"
            padding="p-1"
            text="Continue with Google"
            width="w-76 sm:w-96 md:w-108"
          />
        </div>

        <span className="text-base md:text-lg font-light font-mulish text-primaryTextColor text-center mt-4 whitespace-nowrap">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-base md:text-lg font-light font-mulish text-primaryTextColor hover:underline"
          >
            Sign Up
          </Link>
        </span>
      </div>
    </main>
  );
};

export default LoginPage;

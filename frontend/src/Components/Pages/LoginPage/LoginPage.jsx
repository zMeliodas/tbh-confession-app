import { useState } from "react";
import InputField from "../../common/InputField";
import CustomButtonPurple from "../../common/CustomButtonPurple";
import CustomButtonGray from "../../common/CustomButtonGray";
import CustomSpinner from "../../common/CustomSpinner";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { handleEnterPress } from "../../../utils/handleEnterPress";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    invalid: "",
  });

  const handleInputChange = (field) => (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [field]: e.target.value,
    });

    if (errors[field] || errors.invalid) {
      setErrors({ ...errors, [field]: "", invalid: "" });
    }
  };

  const handleLoginClick = async (e) => {
    e?.preventDefault();
    const newErrors = {
      username: "",
      password: "",
      invalid: "",
    };

    if (loginCredentials.username.trim().length === 0) {
      newErrors.username = "Username is required";
    }

    if (loginCredentials.password.trim().length === 0) {
      newErrors.password = "Password is required";
    }

    const hasErrors = newErrors.username || newErrors.password;

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      await login(
        loginCredentials.username.trim(),
        loginCredentials.password.trim()
      );
      navigate("/profile", { replace: true });
    } catch (error) {
      setErrors({
        username: "",
        password: "",
        invalid: error.message,
      });
    } finally {
      setIsLoading(false);
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
          onKeyDown={(e) => handleEnterPress(e, handleLoginClick)}
        />
        {errors.username && (
          <span className="font-mulish text-xs md:text-base text-red-400">
            {errors.username}
          </span>
        )}

        <InputField
          label="Password"
          labelTextSize="text-sm md:text-base"
          inputType="password"
          width="w-76 sm:w-96 md:w-108"
          onChange={handleInputChange("password")}
          onKeyDown={(e) => handleEnterPress(e, handleLoginClick)}
        />
        {errors.password && (
          <span className="font-mulish text-xs md:text-base text-red-400">
            {errors.password}
          </span>
        )}

        {errors.invalid && (
          <div className="flex justify-center mt-4">
            <span className="font-mulish text-xs md:text-base text-red-400">
              {errors.invalid}
            </span>
          </div>
        )}

        <div className="mt-4">
          <CustomButtonPurple
            textSize="text-base md:text-lg"
            padding="p-1"
            text={
              <div className="flex items-center justify-center gap-1">
                {isLoading && <CustomSpinner color="color-white" />}
                <span>Login</span>
              </div>
            }
            width="w-76 sm:w-96 md:w-108"
            onClick={handleLoginClick}
            onKeyDown={(e) => handleEnterPress(e, handleLoginClick)}
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

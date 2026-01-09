import InputField from "src/Components/common/InputField";
import CustomButtonGray from "src/Components/common/CustomButtonGray";
import CustomButtonPurple from "src/Components/common/CustomButtonPurple";
import CustomSpinner from "src/Components/common/CustomSpinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "src/providers/AuthProvider";
import { handleEnterPress } from "../../../utils/handleEnterPress";

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const allFilled = Object.values(registerCredentials).every(
    (val) => val.trim().length > 0
  );

  const handleInputChange = (field) => (e) => {
    setRegisterCredentials({ ...registerCredentials, [field]: e.target.value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleRegisterClick = async (e) => {
    e?.preventDefault();
    const newErrors = {
      username: "",
      password: "",
      confirmPassword: "",
    };

    if (registerCredentials.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (registerCredentials.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (registerCredentials.confirmPassword !== registerCredentials.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    const hasErrors =
      newErrors.username || newErrors.password || newErrors.confirmPassword;

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    if (!hasErrors) {
      try {
        setIsLoading(true);
        await register(
          registerCredentials.username.trim(),
          registerCredentials.password.trim()
        );

        navigate("/profile", { replace: true });
      } catch (error) {
        setErrors({
          username: error.message,
          password: "",
          confirmPassword: "",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="bg-backgroundColor flex flex-col items-center h-screen pt-24 overflow-auto">
      <div className="bg-cardBg flex flex-col p-4 justify-start content-start border rounded-xl border-borderColor max-w-116">
        <h1 className="text-3xl text-primaryTextColor font-mulish font-bold">
          TBH Account
        </h1>

        <div className="flex w-74 md:w-92">
          <p className="text-sm md:text-base text-secondaryTextColor font-mulish font-light wrap-break-word">
            By creating an account, you agree to our{" "}
            <span className="text-sm md:text-base text-secondaryTextColor font-mulish font-bold cursor-pointer">
              Privacy Policy{" "}
            </span>
            and{" "}
            <span className="text-sm md:text-base text-secondaryTextColor font-mulish font-bold cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>

        <InputField
          placeholderText="ilovecozl"
          label="Username"
          inputType="text"
          width="w-76 sm:w-96 md:w-108"
          onChange={handleInputChange("username")}
          onKeyDown={(e) => handleEnterPress(e, handleRegisterClick)}
          required
        />
        {errors.username && (
          <span className="font-mulish font-base text-red-400">
            {errors.username}
          </span>
        )}

        <InputField
          label="Password"
          inputType="password"
          width="w-76 sm:w-96 md:w-108"
          onChange={handleInputChange("password")}
          onKeyDown={(e) => handleEnterPress(e, handleRegisterClick)}
          required
        />
        {errors.password && (
          <span className="font-mulish font-base text-red-400">
            {errors.password}
          </span>
        )}

        <InputField
          label="Confirm Password"
          inputType="password"
          width="w-76 sm:w-96 md:w-108"
          onChange={handleInputChange("confirmPassword")}
          onKeyDown={(e) => handleEnterPress(e, handleRegisterClick)}
          required
        />
        {errors.confirmPassword && (
          <span className="font-mulish font-base text-red-400">
            {errors.confirmPassword}
          </span>
        )}

        <div className="mt-4">
          <CustomButtonPurple
            textSize="text-base md:text-lg"
            padding="p-1"
            text={
              <div className="flex items-center justify-center gap-1">
                {isLoading && <CustomSpinner color="color-white/50" />}
                <span>Register</span>
              </div>
            }
            width="w-76 sm:w-96 md:w-108"
            disabled={!allFilled}
            onClick={handleRegisterClick}
            onKeyDown={(e) => handleEnterPress(e, handleRegisterClick)}
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

        <span className="text-sm md:text-lg font-light font-mulish text-primaryTextColor text-center mt-4 whitespace-nowrap">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-sm md:text-lg font-light font-mulish text-primaryTextColor hover:underline"
          >
            Sign In
          </Link>
        </span>
      </div>
    </main>
  );
};

export default RegisterPage;

import logo from "src/assets/logo.svg";
import CustomButtonPurple from "src/Components/common/CustomButtonPurple";
import CustomButtonGray from "src/Components/common/CustomButtonGray";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

const PageNotFound = () => {
  return (
    <div className="bg-backgroundColor flex items-center content-center justify-center gap-24 pt-24 h-screen">
      <div className="ml-8 max-w-lg max-h-lg">
        <img src={logo} alt="logo" className="w-full h-full " />
      </div>

      <div className="flex flex-col mr-8">
        <h1 className="text-primaryTextColor text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full font-mulish font-extrabold tracking-tighter">
          Page Not Found
        </h1>
        <p className="text-secondaryTextColor text-center text-sm md:text-xl font-mulish font-medium pt-8">
          We can't find the page you're looking for.
        </p>

        <p className="text-secondaryTextColor text-center text-sm md:text-xl font-mulish font-medium">
          You can either return to the previous page, visit our homepage or
          contact our support team.
        </p>

        <div className="flex items-center content-center justify-center gap-2 mt-4">
          <Link to={"/profile"}>
            <CustomButtonPurple
              padding="p-2"
              paddingTop="pt-3"
              text="Visit Profile"
              textSize="text-sm md:text-lg"
              width="md:w-38"
            />
          </Link>

          <CustomButtonGray
            onClick={() =>
              window.open("https://github.com/zMeliodas/tbh-confession-app")
            }
            padding="p-2"
            paddingTop="pt-3"
            text="Contact Us"
            textSize="text-sm md:text-lg"
            width="md:w-38"
            icon={
              <FiGithub className="text-offWhite w-4 h-4 md:w-6 md:h-6 pb-1 pr-1 inline-block" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

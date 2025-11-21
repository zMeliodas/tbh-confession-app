import { Link } from "react-router-dom";
import CustomButtonPurple from "src/Components/common/CustomButtonPurple";
import CustomButtonGray from "src/Components/common/CustomButtonGray";
import { FiGithub } from "react-icons/fi";

const LandingPage = () => {
  return (
    <main className="bg-backgroundColor h-screen flex flex-col items-center justify-center pt-24">
      <h1 className="text-primaryTextColor text-center text-8xl w-full font-mulish font-extrabold tracking-tighter">
        Where Secrets Find a Voice
      </h1>
      <p className="text-secondaryTextColor text-center text-xl font-mulish font-medium pt-4">
        A simple platform to express yourself anonymously with encrypted
        messages.
      </p>
      <div className="flex items-center justify-evenly content-center gap-2 mt-8">
        <Link to={"/login"}>
          <CustomButtonPurple
            padding="p-2"
            paddingTop="pt-3"
            text="Get Started"
            width="w-38"
          />
        </Link>

        <CustomButtonGray
          onClick={() =>
            window.open("https://github.com/zMeliodas/tbh-confession-app")
          }
          padding="p-2"
          paddingTop="pt-3"
          text="GitHub"
          width="w-38"
          icon={
            <FiGithub className="text-offWhite w-6 h-6 pb-1 pr-1 inline-block" />
          }
        />
      </div>
    </main>
  );
};

export default LandingPage;

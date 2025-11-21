
const CustomButtonPurple = ({padding, paddingTop, text, width}) => {
  return (
    <>
      <button
        className={`text-lg text-white font-medium bg-purple font-mulish border-transparent ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-purpleHover`}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButtonPurple;

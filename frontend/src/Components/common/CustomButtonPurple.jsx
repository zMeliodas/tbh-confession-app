
const CustomButtonPurple = ({padding, paddingTop, text, width, textSize = "text-lg"}) => {
  return (
    <>
      <button
        className={`${textSize} text-white font-medium bg-purple font-mulish border-transparent px-4 ${padding} ${paddingTop} ${width} rounded-xl cursor-pointer hover:bg-purpleHover`}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButtonPurple;

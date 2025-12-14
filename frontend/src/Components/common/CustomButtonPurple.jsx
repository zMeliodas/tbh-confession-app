const CustomButtonPurple = ({
  padding,
  paddingTop,
  text,
  width,
  textSize = "text-lg",
  disabled = false,
  onClick,
  onKeyDown,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={`${textSize} font-medium font-mulish border-transparent px-4 ${padding} ${paddingTop} ${width} rounded-xl ${
          disabled
            ? "bg-purple/50 text-white/60 cursor-not-allowed"
            : "bg-purple text-white hover:bg-purpleHover cursor-pointer"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButtonPurple;

const TabButton = ({ text, isActive, onClick, activeColor = "text-primaryTextColor", inactiveColor = "text-navIconColor", width, textSize }) => {
  return (
    <button
      className={`flex-1 py-2 ${width} font-mulish text-center font-medium ${textSize} border-b-2 text-primaryTextColor transition-colors duration-200 ${
        isActive
          ? `border-primaryTextColor ${activeColor}`
          : `border-transparent ${inactiveColor}`
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TabButton;
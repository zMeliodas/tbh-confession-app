const TabButton = ({ text, isActive, onClick, activeColor = "text-primaryTextColor", inactiveColor = "text-navIconColor" }) => {
  return (
    <button
      className={`flex-1 py-2 w-48 font-mulish text-center font-medium border-b-2 text-primaryTextColor transition-colors duration-200 ${
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
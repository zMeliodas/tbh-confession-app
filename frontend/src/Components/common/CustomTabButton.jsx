const TabButton = ({ text, isActive, onClick, activeColor = "text-offWhite", inactiveColor = "text-textColorNav" }) => {
  return (
    <button
      className={`flex-1 py-2 w-48 font-mulish text-center font-medium border-b-2 transition-colors duration-200 ${
        isActive
          ? `border-offWhite ${activeColor}`
          : `border-transparent ${inactiveColor}`
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TabButton;
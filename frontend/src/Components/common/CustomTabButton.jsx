const TabButton = ({
  text,
  isActive,
  onClick,
  activeColor = "text-primaryTextColor",
  inactiveColor = "text-navIconColor",
  width,
  textSize,
  badgeCount,
}) => {
  return (
    <button
      className={`py-2 ${width} font-mulish text-center font-medium ${textSize} border-b-2 text-primaryTextColor transition-colors duration-200 ${
        isActive
          ? `border-primaryTextColor ${activeColor}`
          : `border-transparent ${inactiveColor}`
      }`}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-1.5">
        {text}
        {badgeCount > 0 && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple opacity-65 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            <span className="relative inline-flex items-center justify-center w-4 h-4 rounded-full bg-purple text-white text-[10px] font-medium">
              {badgeCount}
            </span>
          </span>
        )}
      </span>
    </button>
  );
};

export default TabButton;

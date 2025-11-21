import { useTheme } from "../../providers/ThemeProvider";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-primaryTextColor transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <MdOutlineWbSunny className="w-8 h-8 cursor-pointer " />
      ) : (
        <FiMoon className="w-8 h-8 cursor-pointer " />
      )}
    </button>
  );
}

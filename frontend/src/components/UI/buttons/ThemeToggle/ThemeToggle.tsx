import { useTheme } from "../../../../hooks/useTheme";
import DarkThemeIcon from "../../icons/DarkThemeIcon/DarkThemeIcon";
import LightThemeIcon from "../../icons/LightThemeIcon/LightThemeIcon";
import cls from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={cls.button} onClick={toggleTheme}>
      {theme === "dark" ? (
        <LightThemeIcon size={52} />
      ) : (
        <DarkThemeIcon size={52} />
      )}
    </button>
  );
}

import type { ButtonHTMLAttributes } from "react";

import { useTheme } from "../../../../hooks/useTheme";
import DarkThemeIcon from "../../icons/DarkThemeIcon/DarkThemeIcon";
import LightThemeIcon from "../../icons/LightThemeIcon/LightThemeIcon";

import cls from "./ThemeToggle.module.css";

type ThemeToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSize?: number;
};

export default function ThemeToggle({
  className,
  iconSize = 52,
  onClick,
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    toggleTheme();
  };

  return (
    <button
      {...props}
      className={`${cls.button} ${className ?? ""}`}
      onClick={handleClick}
    >
      {resolvedTheme === "dark" ? (
        <LightThemeIcon size={iconSize} />
      ) : (
        <DarkThemeIcon size={iconSize} />
      )}
    </button>
  );
}

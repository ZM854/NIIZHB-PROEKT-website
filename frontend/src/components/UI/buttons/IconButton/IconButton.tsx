import type { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./IconButton.module.css";

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button className={cls.burger} {...props}>
      {children}
    </button>
  );
};

export default IconButton;

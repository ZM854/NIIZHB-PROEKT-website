import type { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./IconButton.module.css";

type IconButtonProps = {
  onClick: () => void;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ onClick, children, ...props }: IconButtonProps) => {
  return (
    <button className={cls.burger} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default IconButton;

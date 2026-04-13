import type { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./buttonMain.module.css";

type ButtonMainProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonMain = ({ children, ...props }: ButtonMainProps) => {
  return (
    <button className={cls.button} {...props}>
      {children}
    </button>
  );
};

export default ButtonMain;

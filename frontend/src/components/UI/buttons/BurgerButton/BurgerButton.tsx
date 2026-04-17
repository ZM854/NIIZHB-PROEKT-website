import BurgerIcon from "../../icons/BurgerMenuIcon/BurgerMenuIcon";
import cls from "./BurgerButton.module.css";

type BurgerButtonProps = {
  onClick: () => void;
};

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  return (
    <button className={cls.burger} onClick={onClick}>
      <BurgerIcon size={64} />
    </button>
  );
};

export default BurgerButton;

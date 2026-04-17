import { useState } from "react";
import BurgerButton from "../../components/UI/buttons/BurgerButton/BurgerButton";
import cls from "./Header.module.css";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cls.header}>
      <BurgerButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;

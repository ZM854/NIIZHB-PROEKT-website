import { useState } from "react";
import BurgerButton from "../../components/UI/buttons/BurgerButton/BurgerButton";
import cls from "./HeroSection.module.css";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import TelegramIcon from "../../components/UI/icons/TelegramIcon/TelegramIcon";
import BrandText from "../../components/BrandText/BrandText";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={cls.hero__section}>
      <h1 className={cls.hero__text}>
        <BrandText first="НИИЖБ" second="ПРОЕКТ" />
      </h1>

      <div className={cls.hero__burger}>
        <BurgerButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      <div className={cls.hero__social}>
        <TelegramIcon size={64} />
      </div>

      <div className={cls.hero__credit}>
        <p>© 2022 ООО «НИИЖБ ПРОЕКТ»</p>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
};

export default HeroSection;

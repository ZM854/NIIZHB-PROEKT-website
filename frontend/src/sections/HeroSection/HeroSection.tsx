import { useEffect, useRef, useState } from "react";
import cls from "./HeroSection.module.css";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import TelegramIcon from "../../components/UI/icons/TelegramIcon/TelegramIcon";
import BrandText from "../../components/BrandText/BrandText";
import ThemeToggle from "../../components/UI/buttons/ThemeToggle/ThemeToggle";
import DownArrowIcon from "../../components/UI/icons/DownArrowIcon/DownArrowIcon";
import BurgerIcon from "../../components/UI/icons/BurgerMenuIcon/BurgerMenuIcon";
import IconButton from "../../components/UI/buttons/IconButton/IconButton";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fixHeroHeight = () => {
      if (heroRef.current) {
        const vh = window.innerHeight;
        heroRef.current.style.height = `${vh}px`;
      }
    };

    fixHeroHeight();

    window.addEventListener("orientationchange", () => {
      setTimeout(fixHeroHeight, 100);
    });
  }, []);

  return (
    <section ref={heroRef} className={cls.hero__section}>
      <h1 className={cls.hero__text}>
        <BrandText first="НИИЖБ" second="ПРОЕКТ" />
      </h1>

      <div className={cls.hero__controls}>
        <ThemeToggle />
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BurgerIcon size={64} />
        </IconButton>
      </div>

      <div className={cls.hero__social}>
        <TelegramIcon size={64} />
      </div>

      <div className={cls.down}>
        <IconButton
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
            });
          }}
        >
          <DownArrowIcon size={64} />
        </IconButton>
      </div>

      <div className={cls.hero__credit}>
        <p>© 2022 ООО «НИИЖБ ПРОЕКТ»</p>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
};

export default HeroSection;

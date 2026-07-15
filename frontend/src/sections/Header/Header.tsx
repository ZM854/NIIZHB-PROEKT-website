import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cls from "./Header.module.css";
import BrandText from "../../components/BrandText/BrandText";
import BurgerIcon from "../../components/UI/icons/BurgerMenuIcon/BurgerMenuIcon";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import IconButton from "../../components/UI/buttons/IconButton/IconButton";
import ThemeToggle from "../../components/UI/buttons/ThemeToggle/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navigateToSection = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate("/", {
      state: {
        scrollTo: id,
      },
    });
  };

  return (
    <>
      <header className={cls.header}>
        <Link className={cls.logo} to="/">
          <h3>
            <BrandText first="НИИЖБ " second="ПРОЕКТ" />
          </h3>
        </Link>

        <div className={cls.actions}>
          <nav className={cls.nav}>
            <button
              className={cls.link}
              onClick={() => navigateToSection("about")}
            >
              О нас
            </button>

            <button
              className={cls.link}
              onClick={() => navigateToSection("projects")}
            >
              Проекты
            </button>

            <Link className={cls.link} to="/contacts">
              Контакты
            </Link>
          </nav>

          <ThemeToggle iconSize={40} className={cls.themeToggle} />

          <IconButton
            className={cls.burger}
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(true)}
          >
            <BurgerIcon size={48} />
          </IconButton>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;

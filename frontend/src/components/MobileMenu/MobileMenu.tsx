import { useEffect } from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import cls from "./MobileMenu.module.css";
import CloseIcon from "../UI/icons/CloseIcon/CloseIcon";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ): void => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div
        className={`${cls.backdrop} ${isOpen ? cls.backdrop_visible : ""}`}
        onClick={onClose}
      />

      <div className={`${cls.menu__overlay} ${isOpen ? cls.menu__open : ""}`}>
        <div className={cls.menu__header}>
          <button
            aria-label="Закрыть"
            onClick={onClose}
            className={cls.menu__close}
          >
            <CloseIcon />
          </button>
          <nav className={cls.menu}>
            <ul className={cls.menu__list}>
              <li>
                <a
                  className={cls.menu__item}
                  href="#about"
                  onClick={(e) => {
                    onClose();
                    scrollToSection(e, "about");
                  }}
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  className={cls.menu__item}
                  href="#team"
                  onClick={(e) => {
                    onClose();
                    scrollToSection(e, "team");
                  }}
                >
                  Сотрудники
                </a>
              </li>
              <li>
                <a
                  className={cls.menu__item}
                  href="#projects"
                  onClick={(e) => {
                    onClose();
                    scrollToSection(e, "projects");
                  }}
                >
                  Проекты
                </a>
              </li>
              <li>
                <a
                  className={cls.menu__item}
                  href="#contacts"
                  onClick={(e) => {
                    onClose();
                    scrollToSection(e, "contacts");
                  }}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ContactInfo />
      </div>
    </>
  );
};

export default MobileMenu;

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
                <a href="#about" onClick={onClose}>
                  О нас
                </a>
              </li>
              <li>
                <a href="#team" onClick={onClose}>
                  Сотрудники
                </a>
              </li>
              <li>
                <a href="#projects" onClick={onClose}>
                  Проекты
                </a>
              </li>
              <li>
                <a href="#contacts" onClick={onClose}>
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

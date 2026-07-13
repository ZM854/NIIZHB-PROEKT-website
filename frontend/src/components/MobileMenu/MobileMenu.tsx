import { useEffect } from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import cls from "./MobileMenu.module.css";
import CloseIcon from "../UI/icons/CloseIcon/CloseIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navigateToSection = (id: string) => {
    onClose();

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
                <button
                  className={cls.menu__item}
                  onClick={() => navigateToSection("about")}
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  className={cls.menu__item}
                  onClick={() => navigateToSection("projects")}
                >
                  Проекты
                </button>
              </li>
              <li>
                <Link className={cls.menu__item} to="/contacts">
                  Контакты
                </Link>
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

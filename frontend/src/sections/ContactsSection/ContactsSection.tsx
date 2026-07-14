import { useState } from "react";
import IconButton from "../../components/UI/buttons/IconButton/IconButton";
import ThemeToggle from "../../components/UI/buttons/ThemeToggle/ThemeToggle";
import BurgerIcon from "../../components/UI/icons/BurgerMenuIcon/BurgerMenuIcon";
import cls from "./ContactsSection.module.css";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const ContactsSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={cls.contactsSection} id="about">
      <div className={cls.controls}>
        <ThemeToggle />
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BurgerIcon size={64} />
        </IconButton>
      </div>

      <div className={cls.content}>
        <h2 className={cls.title}>Контакты</h2>

        <div className={cls.contacts}>
          <p className={cls.contactItem}>
            <span>E-mail (для рассылок и предложений о сотрудничестве):</span>
            <a className={cls.email} href="mailto:2021sk@mail.ru">
              2021sk@mail.ru
            </a>
          </p>

          <p className={cls.contactItem}>
            <span>E-mail (по вопросам проектируемых объектов):</span>
            <a className={cls.email} href="mailto:2021sk@mail.ru">
              2021sk@mail.ru
            </a>
          </p>

          <p className={cls.contactItem}>
            <span>Телефон:</span>
            <a className={cls.tel} href="tel:+79269558781">
              +7 (926) 955-87-81
            </a>
          </p>

          <p className={cls.contactItem}>
            <span>Адрес:</span>
            Москва, Пресненская набережная, 10с2
          </p>
        </div>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ce673273d8ced056a5293f89ab5984a0128bdd02fd2049348cb1ab04479ad1b&amp;source=constructor"
          title="Офис компании на карте"
          className={cls.iframe}
        />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
};

export default ContactsSection;

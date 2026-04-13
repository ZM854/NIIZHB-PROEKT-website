import cls from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  return (
    <nav className={cls.menu__wrapper}>
      <a href="#about" className={cls.menu__item}>
        О нас
      </a>
      <a href="#team" className={cls.menu__item}>
        Сотрудники
      </a>
      <a href="#projects" className={cls.menu__item}>
        Реализованные проекты
      </a>
      <a href="#contacts" className={cls.menu__item}>
        Контакты
      </a>
    </nav>
  );
};

export default NavigationMenu;

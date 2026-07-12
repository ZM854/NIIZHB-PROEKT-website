import cls from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={cls.contact__container}>
      <a className={cls.contact__tel} href="tel:+7(926)955-87-81">
        7(926)955-87-81
      </a>

      <a className={cls.contact__email} href="mailto:2021sk@mail.ru">
        <h3>Сотрудничество и предложения</h3>
        <p>2021sk@mail.ru</p>
      </a>

      <a className={cls.contact__email} href="mailto:2021sk@mail.ru">
        <h3>Вопросы по проектам</h3>
        <p>2021sk@mail.ru</p>
      </a>

      <div className={cls.adress}>
        <h3>Адрес</h3>
        <p>г. Москва, Пресненская наб., 10, стр. 2</p>
      </div>
    </div>
  );
};

export default ContactInfo;

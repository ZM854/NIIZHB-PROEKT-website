import cls from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={cls.contact__container}>
      <a className={cls.contact__tel} href="tel:+7(926)955-87-81">
        7(926)955-87-81
      </a>

      <a className={cls.contact__email} href="mailto:example.com">
        <h3>Сотрудничество и предложения</h3>
        <p>2021sk@mail.ru</p>
      </a>

      <a className={cls.contact__email} href="mailto:example.com">
        <h3>Вопросы по проектам</h3>
        <p>2021sk@mail.ru</p>
      </a>
    </div>
  );
};

export default ContactInfo;

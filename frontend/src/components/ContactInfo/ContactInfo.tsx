import cls from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={cls.contact__container}>
      <a className={cls.contact__tel} href="tel:+7(926)955-87-81">
        +7(926)955-87-81
      </a>
      <a className={cls.contact__email} href="mailto:2021sk@mail.ru">
        2021sk@mail.ru
      </a>
    </div>
  );
};

export default ContactInfo;

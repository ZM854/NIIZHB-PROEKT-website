import cls from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={cls.contact__container}>
      <a className={cls.contact__tel} href="tel:+7(999)999-99-99">+7(999)999-99-99</a>
      <a className={cls.contact__email} href="mailto:example.com">example@email.com</a>
    </div>
  );
};

export default ContactInfo;

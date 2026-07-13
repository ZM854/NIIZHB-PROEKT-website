import ContactInfo from "../../components/ContactInfo/ContactInfo";
import cls from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cls.footer} id="contacts">
      <ContactInfo />
    </footer>
  );
};

export default Footer;

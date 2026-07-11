import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MapSection from "../MapSection/MapSection";
import cls from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cls.footer} id="contacts">
      <MapSection />
      <ContactInfo />
    </footer>
  );
};

export default Footer;

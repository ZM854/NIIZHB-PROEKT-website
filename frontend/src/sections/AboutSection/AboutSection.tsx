import BrandText from "../../components/BrandText/BrandText";
import cls from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={cls.about} id="about">
      <h2 className={cls.about__title}>
        <BrandText first="О " second="НАС" />
      </h2>
      <p className={cls.about__content}>
        ООО «НИИЖБ ПРОЕКТ» — проектная организация, объединяющая специалистов с
        многолетним опытом в области проектирования, инженерных изысканий и
        сопровождения строительных проектов. Компания выполняет полный комплекс
        работ — от предпроектной подготовки и разработки проектной и рабочей
        документации до сопровождения экспертиз и реализации объектов, применяя
        современные технологии, включая BIM-моделирование.
      </p>
    </section>
  );
};

export default AboutSection;

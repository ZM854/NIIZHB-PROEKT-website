import BrandText from "../../components/BrandText/BrandText";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import cls from "./ProjectsSection.module.css";
import moscowSity from "../../assets/img-moscow-sity.webp";
import mnevniki from "../../assets/img-mnevniki.webp";
import zverevFactory from "../../assets/img-zverev-factory.webp";
import fok from "../../assets/img-fok.webp";
import lipezkResidental from "../../assets/img-lipezk-residental.webp";
import embaevskoe from "../../assets/img-embaevskoe.webp";
import residentalComplex from "../../assets/img-residental-complex.webp";
import twoCapitans from "../../assets/img-two-capitans.webp";
import pharm from "../../assets/img-pharmaceutical-production.webp";
import tablewarePlant from "../../assets/img-tableware-plant.webp";
import { useState } from "react";

const ProjectsSection = () => {
  const projectData: {
    id: number;
    title: string;
    desc: string;
    img: string;
    variant: "small" | "wide" | "tall" | "big";
  }[] = [
    {
      id: 1,
      title: "Башня «Евразия»",
      desc: "Выполнение обследований основных конструкций здания и инженерных систем и коммуникаций, разработка проектной документации на реконструкцию здания",
      img: moscowSity,
      variant: "tall",
    },
    {
      id: 2,
      title: "Станция метро «Мнёвники»",
      desc: "Разработка проектной и рабочей документации на внешние инженерные сети подключения станционного комплекса",
      img: mnevniki,
      variant: "small",
    },
    {
      id: 3,
      title: "Красногорский завод имени С. А. Зверева",
      desc: "Разработка проектной и рабочей документации на капитальный ремонт, прохождение ГГЭ, выполнение функций авторского надзора",
      img: zverevFactory,
      variant: "small",
    },
    {
      id: 4,
      title: "Физкультурно-оздоровительный комплекс",
      desc: "Разработка полного комплекса проектной и рабочей документаци, прохождение ГГЭ, выполнение функций технического заказчика и авторского надзора, получение РНС",
      img: fok,
      variant: "wide",
    },
    {
      id: 5,
      title: "Жилой район г. Липецк",
      desc: "Разработка полного цикла концепции, проектной и рабочей документации, выполнение функций технического заказчика, получение РНС",
      img: lipezkResidental,
      variant: "small",
    },
    {
      id: 6,
      title: "Жилой район ТОО ЕМБАЕВСКОЕ",
      desc: "Разработка проекта комплексного развития территории, градостроительная концепция",
      img: embaevskoe,
      variant: "small",
    },
    {
      id: 7,
      title: "ЖК с подземной автостоянкой и ДОО",
      desc: "Разработка полного цикла концепции, проектной и рабочей документации, выполнение функций авторского надзора, получение РНС",
      img: residentalComplex,
      variant: "tall",
    },
    {
      id: 9,
      title: "Фармацевтическое производство",
      desc: "Разработка полного цикла концепции, проектной и рабочей документации, выполнение функций авторского надзора, получение РНС",
      img: pharm,
      variant: "wide",
    },
    {
      id: 10,
      title: "Завод по производству одноразовой биоразлагаемой посуды",
      desc: "Разработка полного цикла концепции, проектной и рабочей документации, выполнение функций технического заказчика и авторского надзора, получение РНС",
      img: tablewarePlant,
      variant: "wide",
    },
    {
      id: 8,
      title: "Бизнес-центр «Два капитана»",
      desc: "Разработка проектной и рабочей документации по капитальному ремонту, прохождение ГГЭ, выполнение функций авторского надзора",
      img: twoCapitans,
      variant: "small",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="projects" className={cls.projects}>
      <h2 className={cls.project__title}>
        <BrandText first="НАШИ " second="ПРОЕКТЫ" />
      </h2>
      <div className={cls.project__grid}>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            image={project.img}
            variant={project.variant}
            isActive={activeId === project.id}
            onToggle={() =>
              setActiveId(activeId === project.id ? null : project.id)
            }
            onMouseEnter={() => setActiveId(project.id)}
            onMouseLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

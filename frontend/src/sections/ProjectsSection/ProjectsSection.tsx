import ProjectCard from "../../components/ProjectCard/ProjectCard";
import cls from "./ProjectsSection.module.css";
import moscowSity from "../../assets/projects/preview/img-moscow-sity.webp";
import mnevniki from "../../assets/projects/preview/img-mnevniki.webp";
import zverevFactory from "../../assets/projects/preview/img-zverev-factory.webp";
import fok from "../../assets/projects/preview/img-fok.webp";
import lipezkResidental from "../../assets/projects/preview/img-lipezk-residental.webp";
import embaevskoe from "../../assets/projects/preview/img-embaevskoe.webp";
import residentalComplex from "../../assets/projects/preview/img-residental-complex.webp";
import twoCapitans from "../../assets/projects/preview/img-two-capitans.webp";
import pharm from "../../assets/projects/preview/img-pharmaceutical-production.webp";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ProjectModalContent from "../../components/ProjectModalContent/ProjectModalContent";

const ProjectsSection = () => {
  const projectData: {
    id: number;
    title: string;
    desc: string[];
    location: string;
    area: string;
    img: string;
    variant:
      | "small"
      | "wide"
      | "tall"
      | "big"
      | "wideTabletSmall"
      | "tallTabletSmall";
    loadFullImage: () => Promise<{ default: string }>;
  }[] = [
    {
      id: 1,
      title: "Многофункциональный деловой комплекс «Башня Евразия»",
      desc: [
        "Разработка проектной документации на реконструкцию здания",
        "Прохождение ГАУ «Мосгосэкспертиза»",
      ],
      location: "г. Москва",
      area: "Площадь здания 190 000 кв. м.",
      img: moscowSity,
      loadFullImage: () =>
        import("../../assets/projects/full/img-moscow-sity.webp"),
      variant: "tall",
    },
    {
      id: 2,
      title: "Большая кольцевая линия БКЛ Станция метро «Мнёвники»",
      desc: [
        "Разработка проектной и рабочей документации на внешние инженерные сети подключения станционного комплекса",
        "Прохождение ГАУ «Мосгосэкспертиза»",
      ],
      location: "г. Москва",
      area: "",
      img: mnevniki,
      loadFullImage: () =>
        import("../../assets/projects/full/img-mnevniki.webp"),
      variant: "wide",
    },
    {
      id: 3,
      title: "Красногорский завод имени С. А. Зверева",
      desc: [
        "Разработка проектной и рабочей документации на капитальный ремонт и техническое перевооружение",
        "Прохождение ФАУ «Главгосэкспертиза России»",
        "Выполнение функций авторского надзора",
      ],
      location: "г. Красногорск",
      area: "Общая площадь цехов с АБК 250 000 кв. м.",
      img: zverevFactory,
      loadFullImage: () =>
        import("../../assets/projects/full/img-zverev-factory.webp"),
      variant: "small",
    },
    {
      id: 4,
      title: "Физкультурно-оздоровительный комплекс для НИУ ВШЭ",
      desc: [
        "Разработка АГР, проектной и рабочей документации",
        "Прохождение ФАУ «Главгосэкспертиза России»",
        "Выполнение функций авторского надзора",
      ],
      location: "г. Москва",
      area: "Площадь здания 11 600 кв. м.",
      img: fok,
      loadFullImage: () => import("../../assets/projects/full/img-fok.webp"),
      variant: "wide",
    },
    {
      id: 5,
      title: "Жилой район г. Липецк",
      desc: [
        "Разработка концепции, АГО, проектной документации",
        "Прохождение негосударственной экспертизы",
        "Получение РНС",
      ],
      location: "г. Липецк",
      area: "Общая площадь 150 000 кв. м.",
      img: lipezkResidental,
      loadFullImage: () =>
        import("../../assets/projects/full/img-lipezk-residental.webp"),
      variant: "small",
    },
    {
      id: 8,
      title: "Бизнес-центр «Два капитана»",
      desc: [
        "Разработка проектной и рабочей документации по капитальному ремонту",
        "Прохождение ФАУ «Главгосэкспертиза России»",
        "Выполнение функций авторского надзора",
      ],
      location: "г. Красногорск",
      area: "Общая площадь 130 000 кв. м.",
      img: twoCapitans,
      loadFullImage: () =>
        import("../../assets/projects/full/img-two-capitans.webp"),
      variant: "small",
    },
    {
      id: 6,
      title: "Жилой район ТОО ЕМБАЕВСКОЕ",
      desc: [
        "Разработка проекта комплексного развития территории",
        "Градостроительная концепция",
      ],
      location: "г. Тюмень",
      area: "Общая площадь 1 000 000 кв. м.",
      img: embaevskoe,
      loadFullImage: () =>
        import("../../assets/projects/full/img-embaevskoe.webp"),
      variant: "tall",
    },
    {
      id: 7,
      title: "Жилой комплекс с подземной автостоянкой и ДОО",
      desc: [
        "Разработка АГР, проектной и рабочей документации",
        "Прохождение негосударственной экспертизы",
        "Выполнение функций авторского надзора",
      ],
      location: "г. Москва",
      area: "Общая площадь 41 000 кв. м.",
      img: residentalComplex,
      loadFullImage: () =>
        import("../../assets/projects/full/img-residental-complex.webp"),
      variant: "wide",
    },
    {
      id: 9,
      title: "Фармацевтическое производство",
      desc: [
        "Разработка концепции, АГО, проектной и рабочей документации",
        "Прохождение негосударственной экспертизы",
        "Выполнение функций авторского надзора",
      ],
      location: "г. Щёлково",
      area: "Общая площадь 2 900 кв. м.",
      img: pharm,
      loadFullImage: () =>
        import("../../assets/projects/full/img-pharmaceutical-production.webp"),
      variant: "wideTabletSmall",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const [selectedProject, setSelectedProject] = useState<
    (typeof projectData)[number] | null
  >(null);

  const [fullImage, setFullImage] = useState("");

  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const openProjectModal = async (project: (typeof projectData)[number]) => {
    setSelectedProject(project);

    setIsLoadingImage(true);

    try {
      const image = await project.loadFullImage();

      setFullImage(image.default);
    } finally {
      setIsLoadingImage(false);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setFullImage("");
  };

  return (
    <section id="projects" className={cls.projects}>
      <h2 className={cls.project__title}>ПРОЕКТЫ</h2>
      <div className={cls.project__grid}>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            location={project.location}
            area={project.area}
            image={project.img}
            variant={project.variant}
            isActive={activeId === project.id}
            onToggle={() =>
              setActiveId((prev) => (prev === project.id ? null : project.id))
            }
            onMouseEnter={() => setActiveId(project.id)}
            onMouseLeave={() => setActiveId(null)}
            onMoreClick={() => openProjectModal(project)}
          />
        ))}
      </div>
      <Modal isOpen={selectedProject !== null} onClose={closeProjectModal}>
        {selectedProject && (
          <ProjectModalContent
            title={selectedProject.title}
            location={selectedProject.location}
            area={selectedProject.area}
            description={selectedProject.desc}
            image={isLoadingImage ? "" : fullImage}
          />
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;

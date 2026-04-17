import cls from "./TeamSection.module.css";
import ceoPhoto from "../../assets/img-ceo.webp";
import directorForDesignPhoto from "../../assets/img-director-for-design.webp";
import engineerVkPhoto from "../../assets/img-leading-engineer-vk.webp";
import chiefArchPhoto from "../../assets/img-chief-architect.webp";
import engineerOvac from "../../assets/img-leading-engineer-ovac.webp";
import TeamMember from "../../components/TeamMember/TeamMember";
import BrandText from "../../components/BrandText/BrandText";

const TeamSection = () => {
  const teamData = [
    {
      id: 1,
      name: "Василий Князев",
      position: "Генеральный директор",
      photo: ceoPhoto,
    },
    {
      id: 2,
      name: "Василий Князев",
      position: "Заместитель директора по проектированию",
      photo: directorForDesignPhoto,
    },
    {
      id: 3,
      name: "Василий Князев",
      position: "Ведущий инженер ВК",
      photo: engineerVkPhoto,
    },
    {
      id: 4,
      name: "Василий Князев",
      position: "Главный архитектор",
      photo: chiefArchPhoto,
    },
    {
      id: 5,
      name: "Василий Князев",
      position: "Ведущий инженер ОВиК",
      photo: engineerOvac,
    },
  ];

  return (
    <section className={cls.team__container} id="team">
      <h2 className={cls.team__title}>
        <BrandText first="НАША " second="КОМАНДА" />
      </h2>
      <div className={cls.team__content}>
        {teamData.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            position={member.position}
            photo={member.photo}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

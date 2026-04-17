import cls from "./TeamMember.module.css";

type TeamMemberProps = {
  name: string;
  position: string;
  photo: string;
};

const TeamMember = ({ name, position, photo }: TeamMemberProps) => {
  return (
    <div className={cls.card}>
      <img className={cls.photo} src={photo} alt={name} loading="lazy" />
      <div className={cls.description}>
        <h3 className={cls.name}>{name}</h3>
        <p className={cls.position}>{position}</p>
      </div>
    </div>
  );
};

export default TeamMember;

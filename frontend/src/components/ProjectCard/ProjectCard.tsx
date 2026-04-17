import cls from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  desc: string;
  image: string;
  variant: "small" | "wide" | "tall" | "big";
  isActive: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const ProjectCard = ({
  title,
  desc,
  image,
  variant,
  isActive,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) => {
  return (
    <div
      className={`${cls.card} ${cls[variant]} ${isActive ? cls.active : ""}`}
      onClick={onToggle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className={cls.image} src={image} alt={title} />
      <div className={cls.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

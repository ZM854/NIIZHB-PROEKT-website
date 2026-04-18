import cls from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  desc: string;
  image: string;
  variant:
    | "small"
    | "wide"
    | "tall"
    | "big"
    | "wide"
    | "wideTabletSmall"
    | "tallTabletSmall";
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
  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: fine)").matches) {
      onMouseEnter();
    }
  };

  return (
    <div
      className={`${cls.card} ${cls[variant]} ${isActive ? cls.active : ""}`}
      onClick={onToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className={cls.image} src={image} alt={title} loading="lazy" />
      <div className={cls.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import cls from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  meta: string;
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
  onMoreClick: () => void;
};

const ProjectCard = ({
  title,
  meta,
  image,
  variant,
  isActive,
  onToggle,
  onMouseEnter,
  onMouseLeave,
  onMoreClick,
}: ProjectCardProps) => {
  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: fine)").matches) {
      onMouseEnter();
    }
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onMoreClick();
  };

  return (
    <div
      className={`${cls.card} ${cls[variant]} ${isActive ? cls.active : ""}`}
      onClick={onToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        className={cls.image}
        src={image}
        alt={title}
        loading="lazy"
        fetchPriority="low"
      />
      <div className={cls.content}>
        <h3>{title}</h3>

        <div className={cls.details}>
          <p>{meta}</p>

          <button
            type="button"
            className={cls.moreButton}
            onClick={handleMoreClick}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

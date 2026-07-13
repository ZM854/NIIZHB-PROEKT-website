import cls from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  location: string;
  area: string;
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
  location,
  area,
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
          {(location || area) && (
            <div className={cls.meta}>
              {location && <p>{location}</p>}
              {area && <p>{area}</p>}
            </div>
          )}

          <button
            type="button"
            className={cls.moreButton}
            onClick={handleMoreClick}
          >
            <h4>Подробнее</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

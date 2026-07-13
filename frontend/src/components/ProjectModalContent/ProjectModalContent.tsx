import { useState } from "react";

import cls from "./ProjectModalContent.module.css";

type ProjectModalContentProps = {
  title: string;
  location: string;
  area: string;
  description: string[];
  image: string;
};

const ProjectModalContent = ({
  title,
  location,
  area,
  description,
  image,
}: ProjectModalContentProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cls.wrapper}>
      <div className={cls.imageContainer}>
        {!loaded && <div className={cls.skeleton} />}

        {image && (
          <img
            src={image}
            alt={title}
            className={`${cls.image} ${loaded ? cls.imageLoaded : ""}`}
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

      <div className={cls.info}>
        <h3>{title}</h3>

        {(location || area) && (
          <div className={cls.meta}>
            {location && <p>{location}</p>}
            {area && <p>{area}</p>}
          </div>
        )}

        <div className={cls.divider} />

        <ul className={cls.description}>
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectModalContent;

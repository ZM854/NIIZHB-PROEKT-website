import { useState } from "react";

import cls from "./ProjectModalContent.module.css";

type ProjectModalContentProps = {
  title: string;
  meta: string;
  description: string;
  image: string;
};

const ProjectModalContent = ({
  title,
  meta,
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

        {meta && <p className={cls.meta}>{meta}</p>}

        <div className={cls.divider} />

        <p className={cls.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectModalContent;

import cls from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={cls.logo__container}>
      <span className={cls.logo__red}>НИИЖБ </span>
      <span className={cls.logo__blue}>ПРОЕКТ</span>
    </div>
  );
};

export default Logo;

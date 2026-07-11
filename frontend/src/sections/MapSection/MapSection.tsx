import cls from "./MapSection.module.css";

const MapSection = () => {
  return (
    <section className={cls.map} id="about">
      <h2 className={cls.map__title}>МЫ НА КАРТЕ</h2>
      <div className={cls.map__content}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ce673273d8ced056a5293f89ab5984a0128bdd02fd2049348cb1ab04479ad1b&amp;source=constructor"
          frameBorder="0"
          title="Офис компании на карте"
          className={cls.iframe}
        />
      </div>
    </section>
  );
};

export default MapSection;

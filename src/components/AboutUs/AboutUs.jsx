import SectionName from "../SectionName/SectionName";
import css from "./AboutUs.module.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";

const AboutUs = () => {
  return (
    <section id="aboutus" className={css.aboutUs}>
      <SectionName section="О ПРОЕКТЕ" title="единственный в своём роде" />
      <div className={css.about}>
        <div className={css.aboutL}>
          <img src={about1} alt="about1" className={css.img} />
          <img src={about2} alt="about2" className={css.img} />
        </div>
        <div className={css.aboutR}>
          <p className={css.text}>
            Наша команда ночи напролёт усердно трудилась, чтобы создать токен,
            который позволяет избежать белочки при неудачной торговле
            мем-коинами, ведь теперь она всегда будет храниться у вас в
            кошельке!
          </p>
          <img src={about3} alt="about3" className={css.bigImg} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

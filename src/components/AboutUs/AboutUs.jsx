import { useTranslation } from "react-i18next";
import SectionName from "../SectionName/SectionName";
import css from "./AboutUs.module.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";

const AboutUs = () => {
  const { t } = useTranslation(); // Используем i18n для перевода

  return (
    <section id="aboutus" className={css.aboutUs}>
      <SectionName section={t("aboutUs.section")} title={t("aboutUs.title")} />
      <div className={css.about}>
        <div className={css.aboutL}>
          <img src={about1} alt="about1" className={css.img} />
          <img src={about2} alt="about2" className={css.img} />
        </div>
        <div className={css.aboutR}>
          <p className={css.text}>{t("aboutUs.text")}</p>
          <img src={about3} alt="about3" className={css.bigImg} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

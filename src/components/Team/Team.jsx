import { useTranslation } from "react-i18next";
import SectionName from "../SectionName/SectionName";
import css from "./Team.module.css";
import bomjO from "../../assets/bomjO.png";
import bomjT from "../../assets/bomjT.png";
import bomjS from "../../assets/bomjS.png";

const Team = () => {
  const { t } = useTranslation(); // Используем i18n для перевода

  const members = t("team.members", { returnObjects: true });

  const images = {
    bomjO,
    bomjT,
    bomjS,
  };

  return (
    <section id="team">
      <SectionName section={t("team.section")} title={t("team.title")} />
      <div className={css.partner}>
        {members.map((member, index) => (
          <div className={css.partnerElem} key={index}>
            <span className={css.txt}>
              {member.name.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i === 0 && <br />}
                </span>
              ))}
            </span>
            <img
              className={css.img}
              src={images[member.image]}
              alt={member.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

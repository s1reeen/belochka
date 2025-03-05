import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./RoadMap.module.css";
import SectionName from "../SectionName/SectionName";

const Roadmap = () => {
  const { t } = useTranslation();
  const phases = t("roadmap.phases", { returnObjects: true });

  return (
    <section id="roadmap">
      <SectionName section={t("roadmap.section")} title={t("roadmap.title")} />
      <div id="roadmap" className={styles.roadmap}>
        {phases.map((phase, index) => (
          <div
            key={index}
            className={classNames(styles.phase, {
              [styles.active]: phase.isActive,
              [styles.active]: !phase.isActive,
            })}
          >
            <h3 className={styles.title}>{phase.name}</h3>
            <p className={styles.text}>{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;

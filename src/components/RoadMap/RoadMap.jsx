import classNames from "classnames";
import styles from "./RoadMap.module.css"; // Ваши стили
import SectionName from "../SectionName/SectionName";

const phases = [
  {
    name: "Первая фаза",
    description:
      "Запуск токена на Blum Memepad. Формирование комьюнити и запуск маркетинговой кампании, откуп саплая",
    isActive: true,
  },
  {
    name: "Вторая фаза",
    description:
      "При достижении рыночной капитализации 20.000$, лок саплая команды на две недели",
    isActive: false,
  },
  {
    name: "Третья фаза",
    description: "Выход токена $BELOCHKA на STON.fi и оплата DEX Screener",
    isActive: false,
  },
  {
    name: "Четвёртая фаза",
    description:
      "Бюджет команды будет предназначен для поддержания ликвидности, маркетинга и наград активных участников комьюнити",
    isActive: false,
  },
  {
    name: "Пятая фаза",
    description:
      "Маркетинговый бюджет будет расширен до масштабов проведения конкурсов среди активных участников $BELOCHKA",
    isActive: false,
  },
];

const Roadmap = () => {
  return (
    <>
      <SectionName section="ROADMAP" title="" />
      <div className={styles.roadmap}>
        {phases.map((phase, index) => (
          <div
            key={index}
            className={classNames(styles.phase, {
              [styles.active]: phase.isActive,
              [styles.inactive]: !phase.isActive,
            })}
          >
            <h3 className={styles.title}>{phase.name}</h3>
            <p className={styles.text}>{phase.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roadmap;

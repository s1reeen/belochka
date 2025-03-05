import { useTranslation } from "react-i18next";
import SectionName from "../SectionName/SectionName";
import css from "./Buy.module.css";

const Buy = () => {
  const { t } = useTranslation(); // Используем i18n для перевода

  return (
    <section id="buy">
      <SectionName section={t("buy.section")} title={t("buy.title")} />
      <div className={css.container}>
        <div className={css.elem}>
          <h4 className={css.title}>{t("buy.steps.step1.title")}</h4>
          <p>{t("buy.steps.step1.description")}</p>
        </div>
        <div className={css.elem}>
          <h4 className={css.title}>{t("buy.steps.step2.title")}</h4>
          <p>{t("buy.steps.step2.description")}</p>
        </div>
        <div className={css.elem}>
          <h4 className={css.title}>{t("buy.steps.step3.title")}</h4>
          <p>{t("buy.steps.step3.description")}</p>
        </div>
      </div>
      <div className={css.link}>
        <span className={css.linktxt}>
          {t("buy.guide", {})}
          <a href="https://t.me/belochka_ton"> telegram</a>
        </span>
      </div>
    </section>
  );
};

export default Buy;

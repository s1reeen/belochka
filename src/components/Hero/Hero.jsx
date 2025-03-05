import { useTranslation } from "react-i18next";
import css from "./Hero.module.css";
import belochka from "../../assets/belochka.png";
import tons from "../../assets/tons.png";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={css.hero}>
      <div className={css.blocks}>
        <div className={css.leftBlock}>
          <h1 className={css.title}>{t("hero.title")}</h1>
          <p className={css.text}>{t("hero.text")}</p>
        </div>
        <div className={css.rightBlock}>
          <div className={css.photo}>
            <img className={css.tons} src={tons} alt="TON coins" />
            <img className={css.coin} src={belochka} alt="token image" />
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          (window.location.href =
            "https://t.me/blum/app?startapp=memepadjetton_BELOCHKA_LMQXl-ref_jVTo7UAUYu")
        }
        className={css.buyButton}
      >
        {t("hero.buyButton")}
        <MdArrowOutward className={css.arrow} />
      </button>
    </section>
  );
};

export default Hero;

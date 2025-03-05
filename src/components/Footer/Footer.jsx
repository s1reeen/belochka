import { useTranslation } from "react-i18next";
import css from "./Footer.module.css";
import logow from "../../assets/logow.png";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <img className={css.img} src={logow} alt="" />
        <div className={css.infoBlock}>
          <h3 className={css.title}>{t("footer.subscribe")}</h3>
          <div className={css.info}>
            <ul className={css.links}>
              <span className={css.span}>{t("footer.social")}</span>
              <li className={css.adress}>
                <a href="https://t.me/belochka_ton">Telegram</a>
              </li>
              <li className={css.adress}>
                <a href="#">TikTok</a>
              </li>
            </ul>
            <ul className={css.links}>
              <span className={css.span}>{t("footer.contacts")}</span>
              <li className={css.adress}>{t("footer.phone")}</li>
              <li className={css.adress}>{t("footer.address")}</li>
            </ul>
          </div>
        </div>
        <div className={css.buyBlock}>
          <a href="https://t.me/blum/app?startapp=memepadjetton_BELOCHKA_LMQXl-ref_jVTo7UAUYu">
            <button className={css.buy}>
              {t("footer.buy_token")}
              <MdArrowOutward className={css.arrow} />
            </button>
          </a>
          <span className={css.copy}>{t("footer.copyright.text1")}</span>
          <span className={css.copy}>{t("footer.copyright.text2")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

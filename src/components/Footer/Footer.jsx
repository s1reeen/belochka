import css from "./Footer.module.css";
import logow from "../../assets/logow.png";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <img className={css.img} src={logow} alt="" />
        <div className={css.infoBlock}>
          <h3 className={css.title}>Подписывайтесь на наш телеграм</h3>
          <div className={css.info}>
            <ul className={css.links}>
              <span className={css.span}>Соц.Сети</span>
              <li className={css.adress}>
                <a href="https://t.me/belochka_ton">Telegram</a>
              </li>
              <li className={css.adress}>
                <a href="#">TikTok</a>
              </li>
            </ul>
            <ul className={css.links}>
              <span className={css.span}>Контакты</span>
              <li className={css.adress}>+777-1749-1749-17-49</li>
              <li className={css.adress}>
                ул. Криптоинвестиций 32а, подъезд № 4, г.Фуфел
              </li>
            </ul>
          </div>
        </div>
        <div className={css.buyBlock}>
          <button className={css.buy}>
            КУПИТЬ ТОКЕН
            <MdArrowOutward className={css.arrow} />
          </button>
          <span className={css.copy}>Copyright © 2025</span>
          <span className={css.copy}>Все права защищены</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

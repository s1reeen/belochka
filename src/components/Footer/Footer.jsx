import Logo from "../Logo/Logo";
import css from "./Footer.module.css";
import logow from "../../assets/logow.png";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <img className={css.img} src={logow} alt="" />
        <div>
          <h3>Подписывайтесь на наш телеграм</h3>
          <div className={css.flex}>
            <ul>
              <span>Соц.Сети</span>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
            </ul>
            <ul>
              <span>Контакты</span>
              <li>+777-1749-1749-17-49</li>
              <li>ул. Криптоинвестиций 32а, подъезд № 4, г.Фуфел</li>
            </ul>
          </div>
        </div>
        <div className={css.buyBlock}>
          <button className={css.buy}>
            КУПИТЬ ТОКЕН
            <MdArrowOutward className={css.arrow} />
          </button>
          <span>Copyright © 2025</span>
          <span>Все права защищены</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import css from "./Hero.module.css";
import belochka from "../../assets/belochka.png";
import tons from "../../assets/tons.png";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.leftBlock}>
          <h1 className={css.title}>СЛОВИ БЕЛКУ... С НАМИ!</h1>
          <p>
            Шутим... Мы создали самый стильный, самый народный и самый
            уникальный токен современности.
          </p>
        </div>
        <div className={css.rightBlock}>
          <div className={css.imageWrapper}>
            <div className={css.photo}>
              <img className={css.tons} src={tons} alt="TON coins" />
              <img className={css.coin} src={belochka} alt="token image" />
            </div>
          </div>
        </div>
        <button className={css.buyButton}>
          Купить $BELOCHKA
          <MdArrowOutward className={css.arrow} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

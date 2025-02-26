import css from "./Hero.module.css";
import belochka from "../../assets/belochka.png";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.content}>
        <h1 className={css.title}>слови белку... с нами!</h1>
        <p>
          Шутим... Мы создали самый стильный, самый народный и самый уникальный
          токен современности.
        </p>
      </div>
      <div className={css.photo}>
        <img src={belochka} alt="token image" />
      </div>
    </section>
  );
};
export default Hero;

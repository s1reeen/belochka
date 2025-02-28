import SectionName from "../SectionName/SectionName";
import css from "./Buy.module.css";

const Buy = () => {
  return (
    <section id="buy">
      <SectionName section="ИНСТРУКЦИЯ" title="как купить $belochka" />
      <div className={css.container}>
        <div className={css.elem}>
          <h4 className={css.title}>/1 Установите кошелёк</h4>
          <p>Заведите кошелёк, работающий с сетью TON</p>
        </div>
        <div className={css.elem}>
          <h4 className={css.title}>/2 Купите TON</h4>
          <p>Это можно сделать на любой бирже (Binance, ByBit, OKX...)</p>
        </div>
        <div className={css.elem}>
          <h4 className={css.title}>/3 Финализация</h4>
          <p>Купите токен $BELOCHKA через Blum Memepad</p>
        </div>
      </div>
      <div className={css.link}>
        <span className={css.linktxt}>
          Более подробный гайд по покупке токена находится в нашем{" "}
          <a href="https://t.me/belochka_ton">telegram</a>
        </span>
      </div>
    </section>
  );
};
export default Buy;

import css from "./Partner.module.css";
import lox from "../../assets/lox2.png";
import buhlo from "../../assets/buhlo.png";
import smerdit from "../../assets/smerdit.png";

import SectionName from "../SectionName/SectionName";

const Partner = () => {
  return (
    <>
      <SectionName section="ПАРТНЁРЫ" title="наши ребята" />
      <section className={css.partner}>
        <div className={css.partnerElem}>
          <img className={css.img} src={lox} alt="" />
        </div>
        <div className={css.partnerElem}>
          <img className={css.img} src={buhlo} alt="" />
        </div>
        <div className={css.partnerElem}>
          <img className={css.img} src={smerdit} alt="" />
        </div>
      </section>
    </>
  );
};
export default Partner;

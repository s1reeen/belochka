import SectionName from "../SectionName/SectionName";
import css from "./Team.module.css";
import bomjO from "../../assets/bomjO.png";
import bomjT from "../../assets/bomjT.png";
import bomjS from "../../assets/bomjS.png";

const Team = () => {
  return (
    <>
      <SectionName section="ПАРТНЁРЫ" title="наша команда" />
      <section className={css.partner}>
        <div className={css.partnerElem}>
          <span className={css.txt}>
            исламбек <br /> cиплый
          </span>
          <img className={css.img} src={bomjO} alt="" />
        </div>
        <div className={css.partnerElem}>
          <span className={css.txt}>
            толик <br /> дудник
          </span>
          <img className={css.img} src={bomjT} alt="" />
        </div>
        <div className={css.partnerElem}>
          <span className={css.txt}>
            мямля <br /> дряхлый
          </span>
          <img className={css.img} src={bomjS} alt="" />
        </div>
      </section>
    </>
  );
};
export default Team;

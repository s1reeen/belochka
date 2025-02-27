import SectionName from "../SectionName/SectionName";
import price from "../../assets/price.png";
import css from "./Price.module.css";
import { MdArrowOutward } from "react-icons/md";
import frameOne from "../../assets/frameOne.png";
import frameTwo from "../../assets/frameTwo.png";

const Price = () => {
  return (
    <>
      <SectionName section="ПРОГНОЗ" title="предполагаемая цена" />
      <div className={css.imageContainer}>
        <img className={css.img} src={price} alt="price" />
        <a
          className={css.link}
          href="https://youtu.be/23OjXSI99Nc?si=hmYSxO66Tq9DfepP&t=26"
        >
          Почему 1749?
          <MdArrowOutward className={css.arrow} />
        </a>
        <img className={css.frameOne} src={frameOne} alt="" />
        <img className={css.frameTwo} src={frameTwo} alt="" />
      </div>
    </>
  );
};

export default Price;

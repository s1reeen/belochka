import SectionName from "../SectionName/SectionName";
import price from "../../assets/price.png";
import pricePhone from "../../assets/pricePhone.png";
import css from "./Price.module.css";
import { MdArrowOutward } from "react-icons/md";
import frameOne from "../../assets/frameOne.png";
import frameTwo from "../../assets/frameTwo.png";
import { useEffect, useState } from "react";

const Price = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <SectionName section="ПРОГНОЗ" title="предполагаемая цена" />
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={isMobile ? pricePhone : price}
          alt="price"
        />
        <a
          className={css.link}
          href="https://youtu.be/23OjXSI99Nc?si=hmYSxO66Tq9DfepP&t=26"
        >
          <span>Почему 1749?</span>
          <MdArrowOutward className={css.arrow} />
        </a>
        {!isMobile && (
          <>
            <img className={css.frameOne} src={frameOne} alt="" />
            <img className={css.frameTwo} src={frameTwo} alt="" />
          </>
        )}
      </div>
    </>
  );
};
export default Price;

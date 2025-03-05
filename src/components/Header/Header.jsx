import { useState } from "react";
import Logo from "../Logo/Logo";
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";
import css from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.headerWrapper}>
          <Logo />
          <button className={css.burgerButton} onClick={toggleMenu}>
            <div
              className={`${css.burgerLine} ${isMenuOpen ? css.open : ""}`}
            />
            <div
              className={`${css.burgerLine} ${isMenuOpen ? css.open : ""}`}
            />
            <div
              className={`${css.burgerLine} ${isMenuOpen ? css.open : ""}`}
            />
          </button>
          <nav className={`${css.menu} ${isMenuOpen ? css.menuOpen : ""}`}>
            <ul>
              <li>
                <a href="#aboutus">{t("header.menu.aboutUs")}</a>
              </li>
              <li>
                <a href="#roadmap">{t("header.menu.roadMap")}</a>
              </li>
              <li>
                <a href="#buy">{t("header.menu.buy")}</a>
              </li>
              <li>
                <a href="#team">{t("header.menu.team")}</a>
              </li>
              <li>
                <a href="https://t.me/belochka_ton">
                  <span>{t("header.menu.telegram")}</span>
                  <MdArrowOutward className={css.arrow} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMenuOpen && <div className={css.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;

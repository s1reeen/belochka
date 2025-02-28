import { useState } from "react";
import Logo from "../Logo/Logo";
import { MdArrowOutward } from "react-icons/md";
import css from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                <a href="#aboutus">О НАС</a>
              </li>
              <li>
                <a href="#roadmap">РОУДМАП</a>
              </li>
              <li>
                <a href="#buy">КАК КУПИТЬ</a>
              </li>
              <li>
                <a href="#team">КОМАНДА</a>
              </li>
              <li>
                <a href="https://t.me/belochka_ton">
                  <span>НАШ ТЕЛЕГРАМ</span>
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

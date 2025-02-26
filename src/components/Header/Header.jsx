import css from "./Header.module.css";
import { useState } from "react";
import Logo from "../Logo/Logo";
import { MdArrowOutward } from "react-icons/md";
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
                <a className={css.active} href="#home">
                  О НАС
                </a>
              </li>
              <li>
                <a href="#features">РОУДМАП</a>
              </li>
              <li>
                <a href="#download">КАК КУПИТЬ</a>
              </li>
              <li>
                <a href="#faq">КОМАНДА</a>
              </li>
              <li>
                <a href="#faq">
                  НАШ ТЕЛЕГРАМ
                  <MdArrowOutward />
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

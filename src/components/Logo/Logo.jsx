import logo from "../../assets/logo.png";
import css from "./Logo.module.css";
const Logo = () => {
  return <img className={css.logo} src={logo} alt="logo" />;
};
export default Logo;

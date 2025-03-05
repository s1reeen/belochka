import { useTranslation } from "react-i18next";
import "./i18n";
import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Partner from "./components/Partner/Partner";
import RoadMap from "./components/RoadMap/RoadMap";
import Price from "./components/Price/Price";
import Buy from "./components/Buy/Buy";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { t } = useTranslation(); // Хук для получения функции перевода

  return (
    <>
      <Header title={t("header.title")} /> {/* Пример использования перевода */}
      <Hero message={t("hero.mainMessage")} />
      <div className="wrapper">
        <AboutUs title={t("aboutUs.title")} />
        <Partner />
        <RoadMap />
        <Price />
        <Buy />
        <Team />
      </div>
      <Footer />
    </>
  );
};
export default App;

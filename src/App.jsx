import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AbooutUs/AboutUs";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
};
export default App;

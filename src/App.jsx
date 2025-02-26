import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Partner/Partner";
import RoadMap from "./components/RoadMap/RoadMap";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="wrapper">
        <AboutUs />
        <Team />
        <RoadMap />
      </div>
    </>
  );
};
export default App;

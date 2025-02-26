import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
    </div>
  );
};
export default App;

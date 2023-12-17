import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HeroCard from "./components/HeroCard";
import Statistic from "./components/Statistic";
import Product from "./components/Product";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HeroCard />
      <About />
      <Product />
      <Statistic />
      <Team />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import Product from "./components/Product";
import Team from "./components/Team";
import HeroSection from "./components/HeroSection";
import HeroCard from "./components/HeroCard";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HeroCard />
      <About />
      <Product />
      <Statistics />
      <Team />
      <Footer />
    </>
  );
}

export default App;

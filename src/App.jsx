import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;

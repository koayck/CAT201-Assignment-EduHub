import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import Product from "./components/Product";
import Team from "./components/Team";
import HeroSection from "./components/HeroSection";
import HeroCard from "./components/HeroCard";
import About from "./components/About";
import { useEffect, useRef } from "react";

function App() {


  const heroSection = useRef(null);
  const aboutSection = useRef(null);
  const productSection = useRef(null);
  const teamSection = useRef(null);
  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <NavBar
        scrollToRef={scrollToRef}
        heroSection={heroSection}
        aboutSection={aboutSection}
        productSection={productSection}
        teamSection={teamSection}
      />
      <HeroSection ref={heroSection} />
      <HeroCard />
      <About ref={aboutSection} />
      <Product ref={productSection} />
      <Statistics />
      <Team ref={teamSection} />
      <Footer
        scrollToRef={scrollToRef}
        heroSection={heroSection}
        aboutSection={aboutSection}
        productSection={productSection}
        teamSection={teamSection}
      />
    </>
  );
}

export default App;

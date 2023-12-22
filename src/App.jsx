import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import Product from "./components/Product";
import Team from "./components/Team";

function App() {
  return (
    <>
      <NavBar />
      <Product />
      <Statistics />
      <Team />
      <Footer />
    </>
  );
}

export default App;

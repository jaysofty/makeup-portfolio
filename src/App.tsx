import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { footerSections, navLinks } from "./data/data";

function App() {
  return (
    <div className="">
      <NavBar navItems={navLinks} />
      <Hero />
      <Portfolio />
      <Footer groups={footerSections} brandName="Kunzy" />
    </div>
  );
}

export default App;

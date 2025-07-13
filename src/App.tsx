import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { footerSections, navLinks } from "./data/data";

function App() {
  return (
    <div className="">
      <NavBar navItems={navLinks} />
      <main>
        <section id="home" style={{ height: "100vh" }}>
          <Hero />
          <Portfolio />
          <Footer groups={footerSections} brandName="Kunzy" />
        </section>
        <section id="about" style={{ height: "100vh" }}>
          <About />
        </section>
        {/* <section id="services" style={{ height: "100vh" }}>
          Services Section
        </section> */}
        {/* <section id="contact" style={{ height: "100vh" }}>
          Contact Section
        </section> */}
      </main>
    </div>
  );
}

export default App;

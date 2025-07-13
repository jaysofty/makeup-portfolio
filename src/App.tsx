import About from "./components/About";
import ExpandableText from "./components/ExpandableText";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { footerSections, navLinks } from "./data/data";
import image from "./assets/about_image.jpg";
import kunzy from "./assets/kunzy.jpg";
import TestimonialCarousel from "./components/TestimonialCarousel";

function App() {
  const testimonials = [
    {
      imageSrc: image,
      quote: (
        <ExpandableText maxChars={100}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit
          magnam maiores modi aspernatur saepe voluptatibus fugiat quisquam
          dicta.
        </ExpandableText>
      ),
      author: "John Doe",
      company: "Joe Company",
    },
    {
      imageSrc: kunzy,
      quote: (
        <ExpandableText maxChars={100}>
          This was a stunning transformation and a very professional experience!
        </ExpandableText>
      ),
      author: "Jane Smith",
      company: "StylePro Studio",
    },
  ];

  return (
    <div>
      <NavBar navItems={navLinks} />
      <main>
        <section id="home" style={{ padding: "4rem 0" }}>
          <Hero />
        </section>

        <section id="about" style={{ padding: "3rem 0" }}>
          <About>
            <TestimonialCarousel testimonials={testimonials} />
          </About>
        </section>

        <section id="portfolio" style={{ padding: "4rem 0" }}>
          <Portfolio />
        </section>
      </main>
      <Footer groups={footerSections} brandName="Kunzy" />
    </div>
  );
}

export default App;

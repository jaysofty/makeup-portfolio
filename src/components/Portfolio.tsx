import React from "react";

interface PortfolioItem {
  image: string;
  alt: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    image: "../",
    alt: "Bridal Makeup",
    title: "Bridal Glam",
  },
  {
    image: "images/makeup2.jpg",
    alt: "Editorial Makeup",
    title: "Editorial Look",
  },
  {
    image: "images/makeup3.jpg",
    alt: "Party Makeup",
    title: "Party Glow",
  },
  {
    image: "images/makeup4.jpg",
    alt: "Natural Makeup",
    title: "Soft Natural",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio-section">
      <header className="portfolio-header">
        <h2 className="portfolio_header">Makeup Portfolio</h2>
        <p>A showcase of our artistry and creativity</p>
      </header>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.alt} />
            <div className="portfolio-caption">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

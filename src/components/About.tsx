// About.tsx
import React from "react";
import image from "../assets/about_image.jpg";

interface AboutProps {
  children: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <section className="container py-5">
      <h2 className="text-center text-primary mb-5">About Us</h2>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={image} alt="About" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">{children}</div>
      </div>
    </section>
  );
};

export default About;

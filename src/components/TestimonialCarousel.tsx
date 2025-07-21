import React from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  imageSrc: string;
  quote: React.ReactNode;
  author: string;
  company?: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
            style={{ display: "block" }}
          >
            <div className="container py-4 bg-gradient text-black rounded shadow">
              <TestimonialCard {...testimonial} />
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TestimonialCarousel;

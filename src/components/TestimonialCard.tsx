import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  quote: React.ReactNode;
  author: string;
  company?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quote,
  author,
  company,
}) => {
  // console.log("QUOTE", quote);
  return (
    <div className="card border-0 shadow-sm p-3 h-100">
      <div className="d-flex flex-column flex-md-row align-items-center gap-3">
        <img
          src={imageSrc}
          alt={author}
          className="rounded-circle img-fluid"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <div>
          <blockquote className="blockquote mb-2">
            <p className="lead mb-0 ">{quote}</p>
          </blockquote>
          <footer className="blockquote-footer mt-2">
            <strong className="text-primary">{author}</strong>
            {company && <span className="text-muted">, {company}</span>}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

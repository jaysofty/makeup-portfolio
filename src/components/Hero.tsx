import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <header className="hero text-center hero__text fade-in-up">
        <div className="container py-5">
          <h1 className="display-4">Get • Elegance • Leave Exceptional</h1>
          <p className="hero__tagline">
            Welcome to Bando Gele, a beauty and makeup Shop.
          </p>
          {/* <a href="#" className="btn btn-primary btn-lg mt-3">
            Explore Portfolio
          </a> */}
          <Button type="submit" color="success" rounded={true}>
            <span className="flex items-center gap-2">
              {/* 👇 Fix: Use JSX cast if needed */}
              {FaWhatsapp({ size: 18 })}
              Whatsapp
            </span>
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Hero;

import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <header className="hero text-center hero__text fade-in-up">
        <div className="container py-5">
          <h1 className="display-4">Makeup • Model • Beauty</h1>
          <p className="hero__tagline">
            Welcome to Bando Gele, a beauty and makeup Shop.
          </p>
          {/* <a href="#" className="btn btn-primary btn-lg mt-3">
            Explore Portfolio
          </a> */}
          <Button type="secondary" color="info">
            Explore Portfolio
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Hero;

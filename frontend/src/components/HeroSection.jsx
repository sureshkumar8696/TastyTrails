import { useEffect } from "react";
import Navbar from "./Navbar";
import Typed from "typed.js";
const HeroSection = () => {
  useEffect(() => {
    const typed = new Typed(".typed-word", {
      strings: ["Tasty", "Yummy", "Scrumptious","Delicious"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">
              <span className="typed-word">Delicious</span>
            </h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing were serious about is food.</p>
            </div>
            <p className="mid">
              At TastyTrails, we're more than just a restaurant—we're a culinary
              destination where passion meets flavor. With a commitment to
              quality and innovation, we strive to provide an unforgettable
              dining experience for every guest. Our dedicated team of culinary
              artisans brings together expertise and creativity to craft dishes
              that tantalize the taste buds and delight the senses. From
              farm-fresh ingredients to artisanal techniques, every aspect of
              our cuisine reflects our dedication to excellence. Whether you're
              joining us for a casual meal or a special celebration, we invite
              you to immerse yourself in the warmth and hospitality of . Welcome
              to our culinary world.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

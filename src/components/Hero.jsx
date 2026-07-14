import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Hero.css";

import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";
import hero5 from "../assets/images/hero/hero5.jpg";

function Hero() {

  const heroImages = [hero1, hero2, hero3, hero4, hero5];

  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImages[currentImage]})`,
      }}
    >

      <div className="hero-overlay">

        <div className="hero-content">

          <span className="hero-tag">
              Premium Furniture Collection
          </span>

          <h1>
              Transform Your Home Into
              <br />
              A Beautiful Space
          </h1>

          <p>
              Discover handcrafted sofas, luxury beds,
              elegant dining tables and modern décor
              designed to make every room feel special.
          </p>

          <div className="hero-buttons">

            <button
              className="shop-btn"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>

            <button
              className="explore-btn"
              onClick={() => {
                const section = document.getElementById("categories");

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            >
              Explore Collection
            </button>

          </div>

      </div>

      </div>

    </section>

  );
}

export default Hero;



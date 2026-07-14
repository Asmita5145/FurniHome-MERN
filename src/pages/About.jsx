import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../css/About.css";

function About() {
  return (
  <>
    <PageTitle title="About" /> 

    <Breadcrumb current="About" />

    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <h1>About FurniHome</h1>
        <p>
          Crafting beautiful spaces with timeless furniture and modern
          design.
        </p>
      </section>

      {/* Story */}
      <section className="about-story">
        <h2>Our Story</h2>

        <p>
          FurniHome was created with one simple vision — to make premium,
          stylish, and comfortable furniture accessible to every home.
          We believe furniture is more than just décor; it creates
          memories, comfort, and a space where families grow together.
        </p>

        <p>
          From elegant living room sofas to functional storage solutions,
          every product is carefully selected to combine quality,
          durability, and modern aesthetics.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">

        <div className="card">
          <h3>Our Mission</h3>

          <p>
            To provide premium-quality furniture that combines comfort,
            functionality, and timeless design while delivering an
            exceptional shopping experience.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>

          <p>
            To become one of the most trusted furniture brands by helping
            customers create beautiful homes with innovative and
            sustainable furniture solutions.
          </p>
        </div>

      </section>

      {/* Stats */}
      <section className="about-stats">

        <div className="stat">
          <h2>12+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>28+</h2>
          <p>Premium Products</p>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <p>Customer Satisfaction</p>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-about">

        <h2>Why Choose FurniHome?</h2>

        <div className="why-grid">

          <div>✔ Premium Quality Furniture</div>
          <div>✔ Modern & Elegant Designs</div>
          <div>✔ Fast & Safe Delivery</div>
          <div>✔ Secure Payments</div>
          <div>✔ Easy Returns</div>
          <div>✔ Dedicated Customer Support</div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <h2>Ready to Transform Your Home?</h2>

        <p>
          Discover furniture designed for comfort, style, and everyday
          living.
        </p>

        <Link to="/shop" className="cta-btn">
          Shop Now
        </Link>

      </section>

    </div>
  </>
  );
}

export default About;
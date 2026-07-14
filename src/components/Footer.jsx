import "../css/Footer.css";

import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import categories from "../data/categories";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-section">
          <h2>FurniHome</h2>

          <p>
            Transform your home with premium furniture designed
            for comfort, elegance, and modern living.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>

          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/shop?category=${encodeURIComponent(category.name)}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <Phone size={18} />
            +91 98765 43210
          </p>

          <p>
            <Mail size={18} />
            support@furnihome.com
          </p>

          <p>
            <MapPin size={18} />
            Pune, Maharashtra
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © {new Date().getFullYear()} FurniHome. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
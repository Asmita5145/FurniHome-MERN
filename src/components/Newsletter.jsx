import { useState } from "react";
import toast from "react-hot-toast";
import "../css/Newsletter.css";

function Newsletter() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <h2>Stay Updated</h2>

        <p>
          Subscribe to receive our latest furniture collections,
          exclusive offers, and interior design inspiration.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;
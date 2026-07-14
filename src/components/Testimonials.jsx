import testimonials from "../data/testimonials";
import "../css/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <p className="testimonial-subtitle">
        Trusted by thousands of happy customers across India.
      </p>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div className="testimonial-card" key={item.id}>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="customer">

              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>

                <h4>{item.name}</h4>

                <span>{item.location}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;
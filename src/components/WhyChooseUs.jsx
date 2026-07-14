import "../css/WhyChooseUs.css";
import {
  Truck,
  ShieldCheck,
  Leaf,
  RotateCcw,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Truck size={45} />,
      title: "Free Delivery",
      description: "Fast & secure delivery across the country.",
    },
    {
      id: 2,
      icon: <Leaf size={45} />,
      title: "Premium Quality",
      description: "Furniture crafted with durable materials.",
    },
    {
      id: 3,
      icon: <ShieldCheck size={45} />,
      title: "Secure Payment",
      description: "100% safe and encrypted payment methods.",
    },
    {
      id: 4,
      icon: <RotateCcw size={45} />,
      title: "Easy Returns",
      description: "7-day hassle-free return policy.",
    },
  ];

  return (
    <section className="why-section">

      <h2>Why Choose FurniHome?</h2>

      <div className="why-grid">

        {features.map((feature) => (
          <div className="why-card" key={feature.id}>

            <div className="why-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;
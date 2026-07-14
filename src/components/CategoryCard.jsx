import { Link } from "react-router-dom";
import "../css/CategoryCard.css";

function CategoryCard({ name, image }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(name)}`}
      className="category-link"
    >
      <div className="category-card">
        <img src={image} alt={name} />

        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
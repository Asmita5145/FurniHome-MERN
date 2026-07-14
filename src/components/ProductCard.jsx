import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { ShoppingCart, Star, Heart } from "lucide-react";
import imageMap from "../utils/imageMap";
import "../css/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  return (
  <Link
    to={`/product/${product._id}`}
    className="product-link"
  >
    <div className="product-card">

      <div className="product-image">

        {product.badge && (
          <span className="badge">
            {product.badge}
          </span>
        )}

        <button
          className="wishlist-btn-card"
          onClick={(e) => {
            e.preventDefault(); // Prevents opening product page
            toggleWishlist(product);
          }}
        >
          <Heart
            size={20}
            fill={isWishlisted(product._id) ? "#e63946" : "none"}
            color="#e63946"
          />
        </button>

        <img
          src={imageMap[product.image]}
          alt={product.name}
        />

      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="category">
          {product.category}
        </p>

        <div className="rating">
          <Star
            size={18}
            fill="#FFD700"
            color="#FFD700"
          />
          <span>{product.rating}</span>
        </div>

        <h2>
          ₹{product.price.toLocaleString()}
        </h2>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

    </div>
  </Link>
);
}

export default ProductCard;
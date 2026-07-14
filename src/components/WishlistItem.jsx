import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import imageMap from "../utils/imageMap";
import "../css/WishlistItem.css";

function WishlistItem({ product }) {

  const { toggleWishlist } = useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  return (

    <div className="wishlist-item">

      <img
        src={imageMap[product.image]}
        alt={product.name}
      />

      <div className="wishlist-info">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <h2>
          ₹{product.price.toLocaleString()}
        </h2>

      </div>

      <div className="wishlist-actions">

        <button
          className="wishlist-cart-btn"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button
          className="wishlist-remove-btn"
          onClick={() => toggleWishlist(product)}
        >
          <Trash2 size={18} />
          Remove
        </button>

        <Link to={`/product/${product._id}`}>
          View Details
        </Link>

      </div>

    </div>

  );

}

export default WishlistItem;
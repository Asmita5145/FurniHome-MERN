import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { getProducts } from "../api/productApi";
import { getProductById } from "../api/productApi";
import RelatedProducts from "../components/RelatedProducts";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import imageMap from "../utils/imageMap";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function fetchProduct() {

      try {

        const data = await getProductById(id);

        setProduct(data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchProduct();

  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
  <>
    <PageTitle title="Product Details" />

    <Breadcrumb current="Product Details" /> 

    <section className="product-details">

      <div className="product-detail-image">
        <img
          src={imageMap[product.image]}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        {product.badge && (
          <span className="detail-badge">
            {product.badge}
          </span>
        )}

        <h1>{product.name}</h1>

        <p className="detail-category">
          {product.category}
        </p>

        <div className="detail-rating">
          <Star
            fill="#FFD700"
            color="#FFD700"
            size={20}
          />
          <span>{product.rating}</span>
        </div>

        <h2 className="detail-price">
          ₹{product.price.toLocaleString()}
        </h2>

        <p className="detail-description">
          {product.description}
        </p>

        <div className="quantity-box">
          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>
        </div>

        <div className="detail-buttons">

          <button
            className="cart-btn"
            onClick={() => {
              addToCart(product, quantity);
              setQuantity(1);
            }}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button
            className="wishlist-btn"
            onClick={() => toggleWishlist(product)}
          >
            <Heart
              size={20}
              fill={isWishlisted(product._id) ? "#e63946" : "none"}
              color="#e63946"
            />

            {isWishlisted(product._id)
              ? " Remove from Wishlist"
              : " Add to Wishlist"}
          </button>

        </div>

      </div>

    </section>

    <RelatedProducts product={product} />

  </>
  );
}

export default ProductDetails;


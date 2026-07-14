import { useContext } from "react";
import { Trash2 } from "lucide-react";
import { CartContext } from "../context/CartContext";
import imageMap from "../utils/imageMap";
import "../css/CartItem.css";

function CartItem({ item }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="cart-item">

      <img
        src={imageMap[item.product.image]}
        alt={item.product.name}
      />

      <div className="cart-details">

        <h3>{item.product.name}</h3>

        <p>{item.product.category}</p>

        <h4>
          ₹{item.product.price.toLocaleString()}
        </h4>

      </div>

      <div className="cart-quantity">

        <button
          onClick={() =>
            decreaseQuantity(
              item._id,
              item.quantity
            )
          }
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            increaseQuantity(
              item._id,
              item.quantity
            )
          }
        >
          +
        </button>

      </div>

      <div className="cart-subtotal">

        ₹{(
          item.product.price *
          item.quantity
        ).toLocaleString()}

      </div>

      <button
        className="remove-btn"
        onClick={() =>
          removeFromCart(item._id)
        }
      >
        <Trash2 size={20} />
      </button>

    </div>
  );
}

export default CartItem;
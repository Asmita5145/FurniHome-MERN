import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Cart.css";

function Cart() {

  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.product.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <>
        <PageTitle title="Cart" />

        <div className="empty-cart">
          <h1>Your Cart is Empty 🛒</h1>

          <Link to="/shop">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle title="Cart" />

      <Breadcrumb current="Cart" />

      <section className="cart-page">

        <h1>Shopping Cart</h1>

        {cart.map((item) => (
          <CartItem
            key={item._id}
            item={item}
          />
        ))}

        <div className="cart-summary">

          <h2>
            Total Items : {totalItems}
          </h2>

          <h2>
            Grand Total :
            ₹{total.toLocaleString()}
          </h2>

          <div className="cart-buttons">

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

            <button
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Cart;
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import toast from "react-hot-toast";
import imageMap from "../utils/imageMap";
import { placeOrderApi } from "../api/orderApi";
import "../css/Checkout.css";

function Checkout() {

  const {
    cart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.product.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {

      toast.error("Please login first");

      return;

    }

    try {

      const orderData = {

        shippingAddress: {
          fullName: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },

        paymentMethod: "Cash on Delivery",

      };

      const response = await placeOrderApi(
        orderData,
        token
      );

      toast.success(response.message);

      await clearCart();

      navigate("/order-success", {
        replace: true,
      });

    } catch (error) {

      console.log(error);
      console.log(error.response?.data);

      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Failed to place order"
      );

    }

  }

  return (
    <>
      <PageTitle title="Checkout" />

      <Breadcrumb current="Checkout" />

      <section className="checkout-page">

        <h1>Checkout</h1>

        <div className="checkout-container">

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <h2>Customer Information</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Place Order
            </button>

          </form>

          <div className="order-summary">

            <h2>Order Summary</h2>

            {cart.map((item) => (

              <div
                className="summary-item"
                key={item._id}
              >

                <img
                  src={imageMap[item.product.image]}
                  alt={item.product.name}
                />

                <div>

                  <h4>{item.product.name}</h4>

                  <p>
                    Qty: {item.quantity}
                  </p>

                </div>

                <span>
                  ₹{(
                    item.product.price *
                    item.quantity
                  ).toLocaleString()}
                </span>

              </div>

            ))}

            <hr />

            <h3>
              Total : ₹{total.toLocaleString()}
            </h3>

          </div>

        </div>

      </section>
    </>
  );

}

export default Checkout;
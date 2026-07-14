import imageMap from "../utils/imageMap";
import generateInvoice from "../utils/generateInvoice";
import "../css/OrderCard.css";

function OrderCard({ order }) {

  return (

    <div className="order-card">

      <div className="order-header">

        <h3>Order ID</h3>

        <span>{order._id}</span>

      </div>

      <p>
        <strong>Date :</strong>{" "}
        {new Date(order.createdAt).toLocaleDateString()}
      </p>

      <p>
        <strong>Status :</strong>{" "}
        {order.orderStatus}
      </p>

      <p>
        <strong>Payment :</strong>{" "}
        {order.paymentMethod}
      </p>

      <h3>
        Total : ₹{order.totalAmount.toLocaleString()}
      </h3>

      <div className="ordered-products">

        {order.products.map((item) => (

          <div
            className="ordered-item"
            key={item._id}
          >

            <img
              src={imageMap[item.product.image]}
              alt={item.product.name}
            />

            <div>

              <h4>{item.product.name}</h4>

              <p>
                Qty : {item.quantity}
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

      </div>

      <button
        className="invoice-btn"
        onClick={() => generateInvoice(order)}
      >
        📄 Download Invoice
      </button>

    </div>

  );

}

export default OrderCard;
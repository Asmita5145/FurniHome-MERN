import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../css/OrderSuccess.css";

function OrderSuccess() {
  const orderId =
    "FH" + Math.floor(Math.random() * 1000000);

  return (
  <>
    <PageTitle title="Order Success" />

    <Breadcrumb current="Order Success" />
    
    <section className="success-page">

      <CheckCircle
        size={90}
        color="#28a745"
      />

      <h1>Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with FurniHome.
      </p>

      <h3>
        Order ID : #{orderId}
      </h3>

      <Link to="/">
        <button>
          Continue Shopping
        </button>
      </Link>

    </section>
  </>
  );
}

export default OrderSuccess;
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../css/TrackOrder.css";

function TrackOrder() {

  const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = 3;

  return (
  <>
    <PageTitle title="Track Order" />

    <Breadcrumb current="Track Order" />
    
    <section className="tracking-page">

      <h1>Track Your Order</h1>

      <div className="tracking-card">

        <h2>Order #1001</h2>

        <p className="delivery-date">
          Estimated Delivery:
          <strong> 12 July 2026</strong>
        </p>

        <div className="timeline">

          {steps.map((step, index) => (

            <div
              className="timeline-item"
              key={index}
            >

              <div
                className={
                  index <= currentStep
                    ? "circle active"
                    : "circle"
                }
              >
                {index < currentStep ? "✓" : ""}
              </div>

              <div className="content">

                <h3>{step}</h3>

              </div>

            </div>

          ))}

        </div>

        <div className="tracking-info">

          <div>

            <h3>Shipping Address</h3>

            <p>
              Pune, Maharashtra
            </p>

          </div>

          <div>

            <h3>Payment</h3>

            <p>Paid Online</p>

          </div>

          <div>

            <h3>Total</h3>

            <p>₹28,999</p>

          </div>

        </div>

      </div>

    </section>
  </>
  );
}

export default TrackOrder;
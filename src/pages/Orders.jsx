import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyOrdersApi } from "../api/orderApi";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import OrderCard from "../components/OrderCard";
import toast from "react-hot-toast";
import "../css/Orders.css";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    async function loadOrders() {

      const token = localStorage.getItem("token");

      if (!token) return;

      try {

        const data = await getMyOrdersApi(token);

        setOrders(data);

      } catch (error) {

        console.log(error);

        toast.error("Failed to load orders");

      }

    }

    loadOrders();

  }, []);

  return (
    <>
      <PageTitle title="My Orders" />

      <Breadcrumb current="My Orders" />

      <section className="orders-page">

        <h1>My Orders</h1>

        {orders.length === 0 ? (

          <div className="empty-orders">

            <h2>No Orders Yet</h2>

            <Link to="/shop">
              <button>Start Shopping</button>
            </Link>

          </div>

        ) : (

          orders.map((order) => (

            <OrderCard
              key={order._id}
              order={order}
            />

          ))

        )}

      </section>
    </>
  );
}

export default Orders;
import api from "./api";

// Place Order
export const placeOrderApi = async (
  orderData,
  token
) => {

  const response = await api.post(
    "/orders",
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;

};

// Get My Orders
export const getMyOrdersApi = async (
  token
) => {

  const response = await api.get(
    "/orders",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.orders;

};

// Get Single Order
export const getOrderDetailsApi = async (
  id,
  token
) => {

  const response = await api.get(
    `/orders/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.order;

};
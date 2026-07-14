import api from "./api";

export const getCart = async (token) => {
  const response = await api.get("/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.cart;
};

export const addToCartApi = async (productId, quantity, token) => {
  const response = await api.post(
    "/cart",
    {
      productId,
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateCartApi = async (cartId, quantity, token) => {
  const response = await api.put(
    `/cart/${cartId}`,
    {
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const removeCartItemApi = async (cartId, token) => {
  const response = await api.delete(`/cart/${cartId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const clearCartApi = async (token) => {
  const response = await api.delete("/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
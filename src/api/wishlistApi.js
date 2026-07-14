import api from "./api";

export const getWishlist = async (token) => {

  const response = await api.get("/wishlist", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.wishlist;
};

export const addToWishlistApi = async (productId, token) => {

  const response = await api.post(
    "/wishlist",
    {
      productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const removeWishlistApi = async (wishlistId, token) => {

  const response = await api.delete(
    `/wishlist/${wishlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
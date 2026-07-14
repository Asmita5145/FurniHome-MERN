import toast from "react-hot-toast";
import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

import { AuthContext } from "./AuthContext";

import {
  getWishlist,
  addToWishlistApi,
  removeWishlistApi,
} from "../api/wishlistApi";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

  const { user } = useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    async function loadWishlist() {

      const token = localStorage.getItem("token");

      if (!token || !user) {

        setWishlist([]);

        return;

      }

      try {

        const items = await getWishlist(token);

        setWishlist(items);

      } catch (error) {

        console.log(error);

        setWishlist([]);

      }

    }

    loadWishlist();

  }, [user]);

  async function toggleWishlist(product) {

    const token = localStorage.getItem("token");

    if (!token) {

      toast.error("Please login first");

      return;

    }

    const exists = wishlist.find(
      (item) => item.product._id === product._id
    );

    try {

      if (exists) {

        await removeWishlistApi(
          exists._id,
          token
        );

        toast.success("Removed from Wishlist");

      } else {

        const response = await addToWishlistApi(
          product._id,
          token
        );

        toast.success(
          `${product.name} - ${response.message}`
        );

      }

      const updatedWishlist = await getWishlist(token);

      setWishlist(updatedWishlist);

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }

  }

  function isWishlisted(productId) {

    return wishlist.some(
      (item) => item.product._id === productId
    );

  }

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}

export default WishlistProvider;
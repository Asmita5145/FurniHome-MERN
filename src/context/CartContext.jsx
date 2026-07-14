import toast from "react-hot-toast";
import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

import { AuthContext } from "./AuthContext";

import {
  getCart,
  addToCartApi,
  updateCartApi,
  removeCartItemApi,
  clearCartApi,
} from "../api/cartApi";

export const CartContext = createContext();

function CartProvider({ children }) {

  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {

    async function loadCart() {

      const token = localStorage.getItem("token");

      if (!token || !user) {

        setCart([]);

        return;

      }

      try {

        const cartItems = await getCart(token);

        setCart(cartItems);

      } catch (error) {

        console.log(error);

        setCart([]);

      }

    }

    loadCart();

  }, [user]);

  async function addToCart(product, quantity = 1) {

    const token = localStorage.getItem("token");

    if (!token) {

      toast.error("Please login first");

      return;

    }

    try {

      const response = await addToCartApi(
        product._id,
        quantity,
        token
      );

      const updatedCart = await getCart(token);

      setCart(updatedCart);

      toast.success(
        `${product.name} - ${response.message}`
      );

    } catch (error) {

      console.log(error.response?.data);
      console.log(error.response?.status);

      toast.error("Failed to add product");

    }

  }

  async function increaseQuantity(cartItemId, currentQuantity) {

    const token = localStorage.getItem("token");

    try {

      await updateCartApi(
        cartItemId,
        currentQuantity + 1,
        token
      );

      const updatedCart = await getCart(token);

      setCart(updatedCart);

    } catch (error) {

      console.log(error);

    }

  }

  async function decreaseQuantity(cartItemId, currentQuantity) {

    const token = localStorage.getItem("token");

    try {

      if (currentQuantity === 1) {

        await removeCartItemApi(
          cartItemId,
          token
        );

      } else {

        await updateCartApi(
          cartItemId,
          currentQuantity - 1,
          token
        );

      }

      const updatedCart = await getCart(token);

      setCart(updatedCart);

    } catch (error) {

      console.log(error);

    }

  }

  async function removeFromCart(cartItemId) {

    const token = localStorage.getItem("token");

    try {

      await removeCartItemApi(
        cartItemId,
        token
      );

      const updatedCart = await getCart(token);

      setCart(updatedCart);

      toast.success("Product removed");

    } catch (error) {

      console.log(error);

    }

  }

  async function clearCart() {

    const token = localStorage.getItem("token");

    try {

      await clearCartApi(token);

      setCart([]);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;
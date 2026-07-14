import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <AuthProvider>

      <CartProvider>

        <WishlistProvider>

          <App />

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </WishlistProvider>

      </CartProvider>

    </AuthProvider>

  </BrowserRouter>
);
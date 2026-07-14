import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";

import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";

import logo from "../assets/images/logo/logo.png";

import "../css/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const { wishlist } = useContext(WishlistContext);

  const { user, logout } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {

        setShowMenu(false);

      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  function handleLogout() {

    logout();

    setShowMenu(false);

    navigate("/");

  }

  return (

    <nav className="navbar">

      {/* Logo */}

      <Link to="/" className="logo">

        <img
          src={logo}
          alt="FurniHome Logo"
        />

      </Link>

      {/* Navigation */}

      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/shop">
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>

      </ul>

      {/* Right Side */}

      <div className="nav-icons">

        <Link to="/search">

          <Search className="icon" />

        </Link>

        {/* Wishlist */}

        <Link
          to="/wishlist"
          className="wishlist-icon"
        >

          <Heart className="icon" />

          <span className="cart-count">

            {wishlist.length}

          </span>

        </Link>

        {/* Cart */}

        <Link
          to="/cart"
          className="cart-icon"
        >

          <ShoppingCart className="icon" />

          <span className="cart-count">

            {cart.reduce(
              (total, item) =>
                total + item.quantity,
              0
            )}

          </span>

        </Link>

        {/* User */}

        {!user ? (

          <Link
            to="/login"
            className="login-btn"
          >

            <User size={20} />

            Login

          </Link>

        ) : (

          <div
            className="user-menu"
            ref={menuRef}
          >

            <button
              className="user-btn"
              onClick={() => setShowMenu(!showMenu)}
            >

              <User size={18} />

              Hi, {user.name.split(" ")[0]}

              <ChevronDown size={16} />

            </button>

            {showMenu && (

              <div className="dropdown-menu">

                <Link
                  to="/profile"
                  onClick={() => setShowMenu(false)}
                >

                  👤 My Profile

                </Link>

                <Link
                  to="/wishlist"
                  onClick={() => setShowMenu(false)}
                >

                  ❤️ Wishlist

                </Link>

                <Link
                  to="/orders"
                  onClick={() => setShowMenu(false)}
                >

                  📦 My Orders

                </Link>

                <button
                  onClick={handleLogout}
                >

                  🚪 Logout

                </button>

              </div>

            )}

          </div>

        )}

      </div>

    </nav>

  );

}

export default Navbar;
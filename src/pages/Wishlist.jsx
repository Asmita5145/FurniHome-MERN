import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Wishlist.css";

function Wishlist() {
  
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {

    return (
      <>
        <PageTitle title="Wishlist" />

        <Breadcrumb current="Wishlist" />

        <div className="empty-wishlist">

          <h1>Your Wishlist is Empty ❤️</h1>

          <Link to="/shop">
            <button>Continue Shopping</button>
          </Link>

        </div>
      </>
    );

  }

  return (
    <>
      <PageTitle title="Wishlist" />

      <Breadcrumb current="Wishlist" />

      <section className="wishlist-page">

        <h1>My Wishlist</h1>

        {wishlist.map((item) => (

          <WishlistItem
            key={item._id}
            product={item.product}
            wishlistId={item._id}
          />

        ))}

      </section>
    </>
  );

}

export default Wishlist;
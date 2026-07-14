import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../api/productApi";
import Loader from "./Loader";
import "../css/ProductGrid.css";

function ProductGrid({
  search = "",
  category = "All",
  sortBy = "default",
  maxPrice = 50000,
}) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    fetchProducts();

  }, []);

  if (loading) {
    return <Loader />;
  }

  let filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesPrice =
      product.price <= maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );

  });

  switch (sortBy) {

    case "low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    case "new":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;

    default:
      break;
  }

  return (
    <section className="products-section">

      <p className="product-count">
        Showing {filteredProducts.length} Products
      </p>

      <div className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        ) : (

          <div className="no-products">

            <h2>😔</h2>

            <h3>No Products Found</h3>

            <p>Try searching with another keyword.</p>

          </div>

        )}

      </div>
    </section>
  );
}

export default ProductGrid;
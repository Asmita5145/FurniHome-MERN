import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../api/productApi";
import "../css/RelatedProducts.css";

function RelatedProducts({ product }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchProducts();

  }, []);

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item._id !== product._id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="related-products">

      <h2>You May Also Like</h2>

      <div className="related-grid">

        {relatedProducts.map((item) => (

          <ProductCard
            key={item._id}
            product={item}
          />

        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import FilterSidebar from "../components/FilterSidebar";
import PriceFilter from "../components/PriceFilter";
import ProductGrid from "../components/ProductGrid";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";

import "../css/Shop.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(50000);

  useEffect(() => {
    const selectedCategory =
      searchParams.get("category") || "All";

    setCategory(selectedCategory);

  }, [searchParams]);

  return (
  <>
    <PageTitle title="Shop" />
    
    <Breadcrumb current="Shop" />

    <section className="shop-page">
      <h1>Our Collection</h1>

      {/* Search + Sort */}
      <div className="shop-top">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="shop-content">

        {/* Sidebar */}
        <div>

          <FilterSidebar
            category={category}
            setCategory={setCategory}
          />

          <PriceFilter
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

        </div>

        {/* Products */}
        <ProductGrid
          search={search}
          category={category}
          sortBy={sortBy}
          maxPrice={maxPrice}
        />

      </div>
    </section>
  </>
  );
}

export default Shop;
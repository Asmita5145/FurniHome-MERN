import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Search.css";

function Search() {

  const [search, setSearch] = useState("");

  return (
  <>
    <PageTitle title="Search" />

    <Breadcrumb current="Search" />
    
    <section className="search-page">

      <h1>Search Products</h1>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search furniture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <ProductGrid
        search={search}
      />

    </section>
  </>
  );

}

export default Search;
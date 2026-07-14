import "../css/SortDropdown.css";

function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="shop-top">
      <div className="sort-box">
        <label>Sort By</label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="new">Newest</option>
        </select>
      </div>
    </div>
  );
}

export default SortDropdown;

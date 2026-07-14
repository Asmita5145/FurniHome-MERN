import "../css/PriceFilter.css";

function PriceFilter({ maxPrice, setMaxPrice }) {
  return (
    <div className="price-filter">

      <h3>Price</h3>

      <input
        type="range"
        min="0"
        max="50000"
        step="1000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      <p>Up to ₹{maxPrice.toLocaleString()}</p>

    </div>
  );
}

export default PriceFilter;
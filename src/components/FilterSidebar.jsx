import "../css/FilterSidebar.css";

function FilterSidebar({ category, setCategory }) {
  const categories = [
    "All",
    "Living Room",
    "Bedroom",
    "Dining",
    "Office",
    "Storage",
    "Decor",
  ];

  return (
    <aside className="sidebar">

      <h2>Categories</h2>

      {categories.map((item) => (
        <button
          key={item}
          className={
            category === item
              ? "active-category"
              : ""
          }
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}

    </aside>
  );
}

export default FilterSidebar;
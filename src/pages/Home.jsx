import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

import categories from "../data/categories";

function Home() {
  return (
    <>
      <PageTitle title="Home" />
      
      <Hero />

      <section
        id="categories"
        className="categories-section"
      >
        <h2>Shop by Category</h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </section>

      <ProductGrid />

      <WhyChooseUs />

      <Testimonials />    

      <Newsletter />
    </>
  );
}

export default Home;


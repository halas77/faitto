// import About from "../components/About";
// import Feature from "../components/Feature";
import Hero from "../components/statics/Hero";
import Product from "../components/products/Product";
import About from "../components/statics/About";
import Service from "../components/statics/Service";
import Contact from "../components/statics/Contact";
import CategoryCard from "../components/CategoryCard";
import { filterTagLabels } from "../utils/constants";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-[83rem] px-4 pt-10 sm:px-0 lg:px-0 lg:py- mx-auto">
        <p className="text-2xl text-gray-800 font-semibold lg:text-3xl lg:pb-5 capitalize">
          Find medical products
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterTagLabels.map((item, index) => (
            <CategoryCard
              title={item.label}
              Icon={item.icon}
              desc="Lorem, ipsum dolor."
              key={index}
            />
          ))}
        </div>
      </div>
      <Product categoryName="Skin Care" />
      <Product categoryName="Cold and Flu" />
      <Product categoryName="Mother and Baby Care" />
      <Product categoryName="First Aid" />
      <Service />
      {/* <Feature /> */}
      <About />
      <Contact />
      {/* <Tag /> */}
    </div>
  );
};

export default HomePage;

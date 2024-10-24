import ProductCard from "../components/ProductCard";
import TitleBar from "../components/TitleBar";
import { pharmacyProducts } from "../utils/constants";

const CategoryDetailPage = () => {
  return (
    <div>
      <TitleBar
        title="Lorem, ipsum."
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero!"
      />
      <div className="max-w-[83rem] px-4 py-10 sm:px-0 lg:px-0 lg:py-14 lg:pb-5 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {pharmacyProducts.map((item, index) => (
            <ProductCard
              features={item.feature}
              name={item.name}
              id={item.id}
              price={item.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;

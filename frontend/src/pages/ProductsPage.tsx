import CategoryCard from "../components/CategoryCard";
import TitleBar from "../components/TitleBar";
import { filterTagLabels } from "../utils/constants";

export interface ProductTypes {
  id: string;
  name: string;
  owner: string;
  origin: string;
  price: string;
  available: string;
}

const ProductsPage = () => {
  return (
    <>
      <TitleBar
        title="Explore Products"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quod!"
      />
      <div className="max-w-[83rem] px-4 py-10 sm:px-0 lg:px-0 lg:py-14 mx-auto">
        <p className="text-2xl text-gray-800 font-semibold lg:text-3xl lg:pb-5 capitalize">
          Popular Categories
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterTagLabels.map((item, index) => (
            <CategoryCard
              title={item.label}
              desc="Lorem, ipsum dolor."
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

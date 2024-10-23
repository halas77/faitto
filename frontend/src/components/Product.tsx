import Button from "./Button";
import { useState } from "react";
import FilterTag from "./FilterTag";
import { filterTagLabels, pharmacyProducts } from "../utils/constants";
import ProductCard from "./ProductCard";

const Product = () => {
  const [current, setCurrent] = useState("All");

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 mx-auto">
      <p className="text-2xl text-gray-800 font-bold lg:text-3xl lg:pb-5 capitalize">
        Find medical products
      </p>
      <div className="flex gap-3 pb-5 max-w-7xl overflow-hidden">
        {filterTagLabels.map((item, index) => (
          <div onClick={() => setCurrent(item.label)}>
            <FilterTag active={current} label={item.label} key={index} />
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="pt-10">
        <Button />
      </div>
    </div>
  );
};

export default Product;

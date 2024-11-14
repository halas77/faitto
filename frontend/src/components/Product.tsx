import Button from "./Button";
import { useEffect, useState } from "react";
import FilterTag from "./FilterTag";
import { filterTagLabels } from "../utils/constants";
import ProductCard from "./ProductCard";
import { ProductData } from "../utils/types";
import { supabase } from "../supabaseClient";
import ProductSkeleton from "./ProductSkeleton";

const Product = () => {
  const [current, setCurrent] = useState("All");

  const [loading, setLoading] = useState(false);
  const [batchs, setBatchs] = useState<ProductData[]>([]);

  // Fetch items
  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from("product").select("*");
    setBatchs(data || []);
    setLoading(false);
    console.log("batchs", data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 mx-auto">
      <p className="text-2xl text-gray-800 font-bold lg:text-3xl lg:pb-5 capitalize">
        Find medical products
      </p>
      <div className="flex gap-3 pb-5 max-w-7xl overflow-hidden">
        {filterTagLabels.map((item, index) => (
          <div key={index} onClick={() => setCurrent(item.label)}>
            <FilterTag active={current} label={item.label} />
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        ) : (
          <>
            {batchs.map((item, index) => (
              <ProductCard
                batchId={item.batchId}
                features={item?.productDesc}
                name={item?.productName}
                id={item?.id}
                price={item.price}
                key={index}
                image={item.image}
              />
            ))}
          </>
        )}
      </div>
      <div className="pt-10">
        <Button />
      </div>
    </div>
  );
};

export default Product;

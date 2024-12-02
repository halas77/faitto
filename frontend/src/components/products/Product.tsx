import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "../../utils/types";
import { supabase } from "../../supabaseClient";
import ProductSkeleton from "./ProductSkeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../utils/constants";

const Product = ({ categoryName }: { categoryName: string }) => {
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
      <p className="text-xl text-gray-800  font-semibold lg:text-2xl  capitalize">
        {categoryName}
      </p>
      <p className="text-xs border-b lg:pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        architecto!
      </p>
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4">
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        </div>
      ) : (
        <div className="pt-4">
          <Slider {...settings}>
            {batchs.map((item, index) => (
              <div key={index} className="p-2">
                <ProductCard
                  batchId={item.batchId}
                  features={item?.productDesc}
                  name={item?.productName}
                  id={item?.id}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Product;

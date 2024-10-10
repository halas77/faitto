import Button from "./Button";
import { getProducts } from "../contract/manageProduct";
import { useEffect, useState } from "react";
import { ProductTypes } from "../pages/ProductsPage";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ProductTypes[]>([]);
  const navigate = useNavigate();
  const handleNavigation = (item: ProductTypes) => {
    navigate(`/product/${item.id}`, { state: { item } });
  };

  const handleGetItems = async () => {
    try {
      setLoading(true);
      const items = await getProducts();
      console.log("items", items);
      setItems(items);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <>
          {loading ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            <>
              {items.map((item) => (
                <div
                  className="cursor-pointer"
                  onClick={() => handleNavigation(item)}
                >
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))}
            </>
          )}
        </>
      </div>
      <div className="pt-10">
        <Button />
      </div>
    </div>
  );
};

export default Product;

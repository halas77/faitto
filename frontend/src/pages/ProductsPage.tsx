import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../contract/manageProduct";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton";

export interface ProductTypes {
  id: string;
  name: string;
  owner: string;
  origin: string;
  price: string;
  available: string;
}

const ProductsPage = () => {
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
    <>
      <div className="bg-green-600/10 pt-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-semibold text-gray-900 text-4xl sm:text-4xl md:text-6xl lg:text-5xl">
              Products
            </h1>
          </div>
        </div>
      </div>
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
      </div>
    </>
  );
};

export default ProductsPage;

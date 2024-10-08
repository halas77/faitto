import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <>
      <div className="bg-green-600/10 pt-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-semibold text-gray-900 text-4xl sm:text-4xl md:text-6xl lg:text-5xl">
              Products
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              provident id veritatis soluta quas doloribus sunt repellat saepe
              repellendus perspiciatis.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

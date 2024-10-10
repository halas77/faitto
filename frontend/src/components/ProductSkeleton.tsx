
const ProductSkeleton = () => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white animate-pulse">
      {/* Skeleton for the image */}
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-gray-300">
        <span className="absolute top-0 left-0 m-2 rounded-full bg-gray-400 w-14 h-6"></span>
      </div>

      {/* Skeleton for the content */}
      <div className="mt-4 px-5 pb-5">
        {/* Skeleton for the product name */}
        <div className="w-2/3 h-6 bg-gray-300 rounded-md mb-3"></div>

        {/* Skeleton for the price and ratings */}
        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            {/* Skeleton for the price */}
            <div className="w-20 h-8 bg-gray-300 rounded-md"></div>
            <div className="w-12 h-5 bg-gray-300 rounded-md"></div>
          </div>

          {/* Skeleton for the stars */}
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;

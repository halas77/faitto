const ProductDetailSkeleton = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center min-h-screen mt-20">
      <div className="container mx-auto bg-white rounded-3xl animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Skeleton Image Container */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="h-[70vh] w-full bg-gray-300 rounded-lg"></div>
          </div>

          {/* Skeleton Data Section */}
          <div className="lg:col-span-3 flex flex-col justify-start p-8">
            {/* Skeleton Button */}
            <div className="flex gap-4 justify-end mb-4">
              <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
            </div>

            {/* Skeleton Title and Info */}
            <div className="mb-4">
              <div className="h-6 w-1/3 bg-gray-300 rounded mb-2"></div>
              <div className="h-8 w-2/3 bg-gray-300 rounded mb-4"></div>
            </div>

            {/* Skeleton Price and Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <div className="h-8 w-1/5 bg-gray-300 rounded mb-2 sm:mb-0 sm:mr-5"></div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                </div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Skeleton Description */}
            <div className="h-4 w-full bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded mb-4"></div>

            {/* Skeleton Date/Time List */}
            <div className="grid grid-cols-1 divide-y divide-gray-100 text-sm">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600 py-4"
                >
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;

import { FaHeart, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-24 h-screen">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="sm:mt-8 lg:flex lg:items-start lg:gap-8">
          <div className="w-full lg:max-w-3xl xl:max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 pb-6 sm:pb-8">
              Shopping Cart
            </h2>
            <div className="space-y-6">
              {/* Cart Item */}
              <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Product Image */}
                  <a href="#" className="shrink-0">
                    <img
                      className="h-20 w-20 object-cover rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                      alt="iMac 2023"
                    />
                  </a>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-800 hover:text-gray-600"
                    >
                      PC System All in One APPLE iMac (2023), M3, 24" Retina
                      4.5K, 8GB, 256GB SSD, 10-core GPU
                    </a>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
                      >
                        <FaHeart className="mr-2 h-5 w-5" />
                        Finish payment
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt className="mr-2 h-5 w-5" />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Product Price */}
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">$1,499</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

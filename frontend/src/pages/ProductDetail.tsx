import { FaStar, FaCheckCircle } from "react-icons/fa";
import { imgURL } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

const ProductDetail = () => {
  const location = useLocation();
  const item = location.state.item;

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-green-600/10 pt-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-semibold text-gray-900 text-4xl sm:text-4xl md:text-6xl lg:text-5xl">
              Product Detail
            </h1>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 py-10 max-w-[84rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
            {/* Image Section */}
            <div className="max-h-[500px] ">
              <img
                src={imgURL}
                alt="Yellow Tropical Printed Shirt"
                className="max-lg:mx-auto lg:mx-auto rounded-3xl h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                <p className="text-lg font-medium leading-8 text-green-600 mb-4">
                  Medcine&nbsp; /&nbsp; Easy
                </p>
                <h2 className="font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                  {item.name}
                </h2>

                {/* Price and Rating */}
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h6 className="font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                    {parseInt(item.price) / 10000000}
                  </h6>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                      1624 reviews
                    </span>
                  </div>
                </div>

                {/* Product Description */}
                <p className="text-gray-500 text-base font-normal mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  provident id veritatis soluta quas doloribus sunt repellat
                  saepe repellendus perspiciatis.
                </p>

                {/* Features List */}
                <ul className="grid gap-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" size={22} />
                    <span className="font-normal text-base text-gray-900">
                      Name - {item.name}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" size={22} />
                    <span className="font-normal text-base text-gray-900">
                      Price - {item.price}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" size={22} />
                    <span className="font-normal text-base capitalize text-gray-900">
                      Origin - {item.origin}
                    </span>
                  </li>
                </ul>

                {/* Buy Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setOpen(true)}
                    className="text-center w-full px-5 py-4 rounded-[100px] bg-green-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-green-700 hover:shadow-green-400"
                  >
                    Buy Now
                  </button>
                </div>
                {open && (
                  <Modal
                    price={item.price}
                    setOpenModal={setOpen}
                    id={item.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

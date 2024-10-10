// import { PiTreasureChestBold } from "react-icons/pi";
// import { FiCheckCircle } from "react-icons/fi";

import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r backdrop-blur-xl from-transparent via-green-400/10 to-transparent pt-32 b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="p-1 w-60 mx-auto rounded-full flex items-center justify-center mb-4">
          <a
            href="javascript:;"
            className="w-8 h-8 rounded-full flex justify-center items-center bg-green-600"
          >
            <FiCheckCircle className="text-white" />
          </a>
          <span className="font-inter text-sm font-medium text-gray-900 ml-3 uppercase">
            Verified by Blockchain
          </span>
        </div>
        <h1 className="max-w-5xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-6xl leading-[50px]">
          A Transparent Marketplace for{" "}
          <span className="text-green-600">Medical Products</span>
        </h1>
        <p className="max-w-3xl mx-auto text-center text-lg font-normal leading-7 text-gray-500 mb-9">
          Access authentic biomedical tools and medicines with full
          traceability, powered by blockchain technology for secure
          transactions.
        </p>
        <Link
          to="/products"
          className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-green-600 shadow-xs hover:bg-green-700 transition-all duration-500"
        >
          Explore products
          <svg
            className="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

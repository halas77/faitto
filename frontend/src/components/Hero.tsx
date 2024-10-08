import { PiTreasureChestBold } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
const Hero = () => {
  return (
    <div className="bg-gradient-to-t  from-green-600/10 pt-10">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="max-w-5xl text-center mx-auto">
          <h1 className="block font-bold text-gray-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            A Transparent Marketplace for  <span className="text-green-600">Biomedical Products</span>
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-700">
            Access authentic biomedical tools and medicines with full
            traceability, powered by blockchain technology for secure
            transactions.
          </p>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="flex items-center space-x-2">
            <PiTreasureChestBold className="text-green-600 text-xl" />
            <p className="text font-medium text-gray-700">
              100% Authentic Products
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FiCheckCircle className="text-green-600 text-xl" />
            <p className="text font-medium text-gray-700">
              Verified by Blockchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

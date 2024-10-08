import { FiShoppingCart, FiShield } from "react-icons/fi";
import { GiMedicines, GiMicroscope } from "react-icons/gi";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-white rounded-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-12 max-w-[85rem] mx-auto">
        <div className="lg:w-3/4">
          <h2 className="text-2xl text-gray-800 font-bold lg:text-3xl">
            Marketplace for Biomedical Tools & Medicines Powered by Blockchain
          </h2>
          <p className="mt-3 text-gray-800">
            Discover a decentralized platform that connects suppliers and buyers
            of biomedical tools and medicines, ensuring secure, transparent, and
            efficient transactions powered by blockchain technology.
          </p>
          <p className="mt-5">
            <Link
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              to="/about"
            >
              Learn more about our platform
              <FiShoppingCart className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" />
            </Link>
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          {/* Feature 1: Blockchain-Powered Transactions */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <FiShield className="shrink-0 size-5" />
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Secure Blockchain Transactions
              </h3>
              <p className="mt-1 text-gray-600">
                Our platform ensures transparent and tamper-proof transactions
                for buying and selling biomedical tools and medicines,
                safeguarded by blockchain technology.
              </p>
            </div>
          </div>

          {/* Feature 2: Biomedical Tools */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <GiMicroscope className="shrink-0 size-5" />
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Biomedical Tools Marketplace
              </h3>
              <p className="mt-1 text-gray-600">
                Explore a wide variety of biomedical tools, from diagnostic
                devices to laboratory equipment, all available on our
                decentralized marketplace.
              </p>
            </div>
          </div>

          {/* Feature 3: Medicines */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
              <GiMedicines className="shrink-0 size-5" />
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Wide Range of Medicines
              </h3>
              <p className="mt-1 text-gray-600">
                Access a comprehensive selection of medicines and pharmaceutical
                products from verified suppliers, with blockchain ensuring
                quality and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

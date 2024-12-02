import { FiArrowRight } from "react-icons/fi";
import { GiMedicines, GiNetworkBars, GiLifeSupport } from "react-icons/gi";
import { imgURL } from "../../utils/constants";

const Service = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[83rem] px-4 sm:px-0 lg:px-0">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-800 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-lg lg:mx-0">
              Transparent, Traceble, Authentic Products
            </h2>
          </div>
          <div className="relative w-full text-start lg:text-left lg:w-2/4">
            <p className="font-normal text-gray-700 mb-5">
              Explore a decentralized marketplace that connects suppliers with
              buyers for authentic biomedical tools and medicines. Powered by
              blockchain, our platform ensures trust, transparency, and secure
              transactions every step of the way.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-green-950 rounded-2xl flex justify-between flex-row flex-wrap">
              <div className="p-5 xl:p-8 w-full md:w-1/2">
                <div className="block">
                  <GiMedicines size={30} color="white" />
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Seamless Access to Authentic Products
                </h3>
                <p className="text-sm font-normal text-gray-200 w-full mb-8 xl:w-64">
                  Instantly browse and purchase certified biomedical tools and
                  medicines in just a few clicks. No delays, no paperwork—just
                  fast, secure transactions.
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-sm text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  Learn More
                  <FiArrowRight size={10} />
                </button>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <img
                  src={imgURL}
                  alt="Medical Products"
                  className="h-full ml-auto object-cover rounded-r-2xl"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-auto">
            <div className="bg-green-900 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block">
                <GiNetworkBars size={30} color="white" />
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Advanced Supply Chain Transparency
              </h3>
              <p className="text-sm font-normal text-white mb-8">
                Track every product’s journey from manufacturer to delivery with
                blockchain-enabled traceability, ensuring full transparency.
              </p>
              <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-sm text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                Learn More
                <FiArrowRight size={10} />
              </button>
            </div>
          </div>

          <div className="relative w-full h-auto">
            <div className="bg-green-900 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block">
                <GiLifeSupport size={30} color="white" />
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Guaranteed Product Authenticity
              </h3>
              <p className="text-sm font-normal text-white mb-8">
                Every product is verified to prevent counterfeits, ensuring only
                authentic biomedical tools and medicines reach our customers.
              </p>
              <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-sm text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                Learn More
                <FiArrowRight size={10} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

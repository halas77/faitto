import { FiShield, FiTool, FiShoppingBag, FiTrendingUp } from "react-icons/fi";

const Feature = () => {
  const featureData = [
    {
      icon: FiShield,
      title: "Secure Blockchain Transactions",
      desc: "Ensure every transaction is safe, transparent, and tamper-proof with our blockchain-powered platform",
    },
    {
      icon: FiTool,
      title: "Biomedical Tools Marketplace",
      desc: "Access cutting-edge biomedical tools and equipment from verified suppliers worldwide.",
    },
    {
      icon: FiShoppingBag,
      title: "Medicines & Pharmaceuticals",
      desc: "Discover a wide range of pharmaceutical products, all backed by blockchain for quality assurance.",
    },
    {
      icon: FiTrendingUp,
      title: "Global Transparency & Growth",
      desc: "Our marketplace fosters trust and growth with global transparency and data immutability.",
    },
  ];
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-16 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Marketplace for <br />
          Biomedical Tools & Medicines
        </h2>
        <p className="mt-1 text-gray-600">
          Explore how our blockchain-powered platform revolutionizes the way
          biomedical tools and medicines are traded, ensuring security,
          transparency, and efficiency.
        </p>
      </div>

      <nav
        className=" mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        {featureData.map((item) => (
          <button
            key={item.title}
            type="button"
            className="bg-gray-100 w-full flex flex-col text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl"
            id="tabs-with-card-item-1"
            aria-selected="true"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
          >
            <>
              <item.icon className="shrink-0 hidden sm:block size-7  text-gray-800" />
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <span className="mt-2 text-sm text-gray-800">{item.desc}</span>
              </div>
            </>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Feature;

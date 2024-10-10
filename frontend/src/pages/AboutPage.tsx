import AboutPageDetail from "../components/AboutPageDetail";

const AboutPage = () => {
  return (
    <>
      <div className="bg-green-600/10 pt-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-semibold text-gray-900 text-4xl sm:text-4xl md:text-6xl lg:text-5xl">
              About Faitto
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-700">
              A Transparent Marketplace for Medical Products Access authentic
              biomedical tools and medicines with full traceability, powered by
              blockchain technology for secure transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <AboutPageDetail />
      </div>
    </>
  );
};

export default AboutPage;

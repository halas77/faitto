import { GoArrowUpRight } from "react-icons/go";

const Ecommerce = () => {
  return (
    <div>
      <section className="pt-28">
        <div className="mx-auto max-w-[83rem] px-4 sm:px-0 lg:px-0">
          <div className="xl:p-16 gap-32 p-8 lg:p-12 bg-gradient-to-r from-green-950 to-teal-900 rounded-3xl flex  justify-between flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-2/3">
              <p className="px-2 py-1 border w-48 text-center rounded-full text-sm font-medium text-green-100 mb-3 border-green-100">
                Verified by Blockchain
              </p>
              <h2 className=" text-5xl text-white font-semibold mb-7 text-left leading-snug">
                A Transparent Marketplace for Medical Products
              </h2>
              <p className="text-lg text-white leading-8 mb-12 text-left">
                Access authentic medicines and biomedical tools with{" "}
                <span className=" bg-green-100 text-[19px] text-green-950 font-semibold px-3 italic rounded-lg">
                  full traceability
                </span>{" "}
                powered by blockchain technology.
              </p>
              <button
                className={`flex justify-center gap-1  items-center rounded-full  font-medium px-4 text-center py-3  w-52  ${" bg-green-700  text-neutral-50"}`}
              >
                Explore products <GoArrowUpRight />
              </button>
            </div>
            <div className="w-full lg:w-2/6 relative hidden lg:flex">
              <img
                src="https://placehold.co/500X600"
                alt="CTA tailwind section"
                className="xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-16 lg:mx-0 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;

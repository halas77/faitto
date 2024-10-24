import { imgURL } from "../utils/constants";

const About = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-[83rem] px-4 md:px-0 lg:px-0 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl object-cover"
                src={imgURL}
                alt="about Us image"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src={imgURL}
              alt="about Us image"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl lg:text-5xl font-bold font-manrope  lg:text-start text-center leading-10">
                <span className="text-green-900">Faitto</span> - Revolutionizing
                the Medicine Marketplace
              </h2>
              <p className="text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                At Faitto, we believe in providing safe, accessible, and
                reliable access to medicine for everyone. Our platform is
                designed to connect trusted pharmaceutical providers with
                consumers, ensuring transparency, quality, and convenience.
                Whether you're looking for everyday healthcare products or
                specialized treatments, Faitto empowers you to find exactly what
                you need, when you need it. By bridging the gap between
                suppliers and consumers, we are driving a healthier world—one
                that is more connected, informed, and secure.
              </p>
            </div>
            <button className="sm:w-fit w-full px-12 py-4 bg-green-900 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-base font-medium leading-6">
                Explore More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

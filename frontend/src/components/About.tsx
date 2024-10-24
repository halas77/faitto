import { Link, useLocation } from "react-router-dom";
import { imgURL } from "../utils/constants";

const About = () => {
  const location = useLocation();
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
              <h2 className="text-gray-800 text-4xl  font-bold font-manrope  lg:text-start text-center leading-10">
                <span className="text-green-900">Faitto</span> - Revolutionizing
                the <br /> Medical Products Marketplace
              </h2>
              <p className="text-gray-700 text-base  leading-relaxed lg:text-start text-center font-normal">
                {location.pathname === "/" ? (
                  <p className="text-lg font-light">
                    At Faitto, we believe in providing safe, accessible, and
                    reliable access to medicine for everyone. Our platform is
                    designed to connect trusted pharmaceutical providers with
                    consumers, ensuring transparency, quality, and convenience.
                  </p>
                ) : (
                  <p className="text-lg font-light">
                    At Faitto, we believe in providing safe, accessible, and
                    reliable access to medicine for everyone. Our platform is
                    designed to connect trusted pharmaceutical providers with
                    consumers, ensuring transparency, quality, and convenience.
                    Whether you're looking for everyday healthcare products or
                    specialized treatments, Faitto empowers you to find exactly
                    what you need, when you need it. By bridging the gap between
                    suppliers and consumers, we are driving a healthier
                    world—one that is more connected, informed, and secure.
                  </p>
                )}
              </p>
            </div>

            {location.pathname === "/" ? (
              <Link
                className="inline-flex border font-semibold border-green-600 px-8 py-2 rounded-3xl items-center gap-x-2 text-base text-green-800 hover:text-green-700 focus:outline-none "
                to="/about"
              >
                Learn more
                <svg
                  className="shrink-0 size-3 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

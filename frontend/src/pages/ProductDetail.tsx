import {
  FaCalendarAlt,
  FaCoins,
  FaClock,
  FaFlagCheckered,
} from "react-icons/fa";

const CampaignDetail = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-32 py-20">
      <div className="grid lg:grid-cols-6 lg:gap-x-8 xl:gap-x-12 lg:items-start justify-center">
        <div className="lg:col-span-3 mt-10 lg:mt-0">
          <img
            className="w-full rounded-xl"
            src="https://placehold.co/600x400"
            alt="Hero Image"
          />
        </div>
        <div className="lg:col-span-3 pt-5 lg:pt-0">
          <h1 className="block text-3xl font-semibold text-gray-950 sm:text-2xl md:text-3xl lg:text-4xl">
            Lorem, ipsum.
          </h1>
          <p className="mt-3 text-base text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptatibus tempora, fuga, non quis quia ipsam blanditiis sit
            obcaecati, officiis voluptatum rerum architecto adipisci laboriosam
            vero asperiores doloremque illum maxime provident! Ut, laudantium
            vero culpa molestiae deleniti cupiditate eius tenetur!
          </p>

          <div className="grid md:grid-cols-2 gap-y-5 text-gray-700 text-sm my-8">
            <div className="flex items-center gap-2">
              <FaFlagCheckered className="text-green-600" /> {/* Target icon */}
              <p className="font-semibold">Target:</p>
              <p> Lorem, ipsum dolor. ether</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-green-600" />{" "}
              {/* Start date icon */}
              <p className="font-semibold">Start date:</p>
              <p>September 1, 2024</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCoins className="text-green-600" /> {/* Raised icon */}
              <p className="font-semibold">Raised:</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-green-600" /> {/* Due date icon */}
              <p className="font-semibold">Due date:</p>
              <p> Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;

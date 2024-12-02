import { IconType } from "react-icons";

const AboutCards = ({
  label,
  desc,
  Icon,
}: {
  label: string;
  desc: string;
  Icon: IconType;
}) => {
  return (
    <div className=" relative w-full bg-gray-200 rounded-2xl p-8 transition-all duration-500 max-md:max-w-md max-md:mx-auto ">
      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
        <Icon size={28} className="text-green-600" />
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-3 capitalize transition-all duration-500 ">
        {label}
      </h4>
      <p className="font-light text-gray-700 transition-all duration-500 leading-5 ">
        {desc}
      </p>
    </div>
  );
};

export default AboutCards;

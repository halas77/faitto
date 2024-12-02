import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons";

const CategoryCard = ({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: IconType;
}) => {
  return (
    <Link
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
      to="/product/category"
    >
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center gap-x-3">
          <div className="flex items-center gap-x-4 grow">
            <Icon
              className="text-green-800 group-hover:text-green-600"
              size={20}
            />
            <div>
              <h3 className="group-hover:text-green-600 font-semibold text-green-800">
                {title}
              </h3>
              <p className="text-sm text-green-900">{desc}</p>
            </div>
          </div>
          <div>
            <IoIosArrowForward
              className="text-green-800 group-hover:text-green-600"
              size={20}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

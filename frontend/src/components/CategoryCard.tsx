import { Link } from "react-router-dom";

const CategoryCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Link
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition  "
      to="/product/category"
    >
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center gap-x-3">
          <div className="grow">
            <h3 className="group-hover:text-green-600 font-semibold text-gray-800">
              {title}
            </h3>
            <p className="text-sm text-gray-500 ">{desc}</p>
          </div>
          <div>
            <svg
              className="shrink-0 size-5 text-gray-800 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

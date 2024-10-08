import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to="/product/productName"
      >
        <img
          className="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to="/product/productName">
          <h5 className="text-xl font-medium text-slate-900">
            Nike Air MX Super
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$449</span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

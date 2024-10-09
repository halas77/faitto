import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { imgURL } from "../utils/constants";

interface ProductCardType {
  id: string;
  name: string;
  price: string;
}

const ProductCard = ({ name, price, id }: ProductCardType) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to={`/product/${id}`}
      >
        <img className="object-cover" src={imgURL} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to="/product/productName">
          <h5 className="text-xl font-medium text-slate-900">{name}</h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{price}</span>
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

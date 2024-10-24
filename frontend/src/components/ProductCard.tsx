import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { imgURL } from "../utils/constants";

interface ProductCardType {
  id: string;
  features: string;
  name: string;
  price: string;
}

const ProductCard = ({ name, price, id, features }: ProductCardType) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-xl border border-gray-100 bg-white">
      <Link
        className="relative  flex h-60 overflow-hidden rounded-t-xl"
        to={`/product/category/${id}`}
      >
        <img className="object-cover" src={imgURL} alt="product image" />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to="/product/productName">
          <h5 className="text-lg font-semibold text-slate-900">{name}</h5>

          <p className="text-xs py-2">{features}</p>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">{price}</span>
          </p>
          <div className="flex items-center">
            <FaStar className="text-green-700" />
            <FaStar className="text-green-700" />
            <FaStar className="text-green-700" />
            <FaStar className="text-green-700" />
            <FaStar className="text-green-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

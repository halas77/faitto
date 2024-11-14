import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { imgURL } from "../utils/constants";

interface ProductCardType {
  id: string;
  features: string;
  name: string;
  price: number | string;
  image: string;
  batchId: string | number;
}

const ProductCard = ({
  name,
  id,
  features,
  price,
  image,
  batchId,
}: ProductCardType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/category/${id}`, {
      state: {
        batchId: batchId,
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex w-full max-w-xs flex-col cursor-pointer hover:scale-105 ease-in-out duration-200 overflow-hidden rounded-xl border border-gray-100 bg-white"
    >
      <div className="relative  flex h-60 overflow-hidden rounded-t-xl">
        <img
          className="object-cover"
          src={image || imgURL}
          alt="product image"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-lg font-semibold text-slate-900">{name}</h5>

          <p className="text-xs py-2">{features.slice(0, 60)}..</p>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">${price}</span>
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

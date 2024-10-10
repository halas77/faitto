import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { pay } from "../contract/manageProduct";

interface CreateProductModalProp {
  id: string;
  price: string;
  setOpenModal: (open: boolean) => void;
}

const Modal = ({ id, setOpenModal, price }: CreateProductModalProp) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("id", id);
      setLoading(true);
      const ethAmount = price;
      await pay({ id, ethAmount });
      setLoading(false);
      window.location.reload();
      setOpenModal(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-full bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-2">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-start mb-6 border-b pb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Payment</h3>
          </div>
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <form onSubmit={handlePayment}>
          <div className="grid gap-6">
            <div className="flex justify-between">
              <p className="text-xl font-bold text-slate-900">Price</p>
              <p>
                <span className="text-xl font-semibold text-slate-900">
                  {parseInt(price) / 10000000}

                  <span className="text-sm font-normal ml-1">ETH</span>
                </span>
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-green-600 text-white text-sm rounded hover:bg-green-900 focus:outline-none focus:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

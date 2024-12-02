import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductHistoryType } from "../../utils/types";
import { getBatch } from "../../contract/manageBatch";
import TimelineSkeleton from "./TimelineSkeleton";

const TimelineModal = ({
  setOpenModal,
  batchId,
  productName,
}: {
  setOpenModal: (open: boolean) => void;
  batchId: number | string;
  productName: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProductHistoryType>();

  const getProductHistory = async () => {
    setLoading(true);
    const data = await getBatch(batchId);
    setData(data || {});
    setLoading(false);
  };

  useEffect(() => {
    getProductHistory();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-2">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <div className="flex justify-between items-start mb-6 border-b pb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Product history
            </h3>
            <p className="text-xs text-gray-500 mt-1 ml-1">
              Product details for traceability and transparency.
            </p>
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
        {loading ? (
          <>
            <TimelineSkeleton />
            <TimelineSkeleton />
            <TimelineSkeleton />
          </>
        ) : (
          <>
            {[0].map((i) => (
              <div key={i} className="flex gap-x-3">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 ">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 "></div>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <h3 className="text-xs uppercase text-gray-500">
                    {data?.formatttedDate}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600 -400 max-w-md">
                    Product <i className="font-semibold">{productName}</i> is
                    created.
                  </p>
                  <Link
                    to={``}
                    type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                  >
                    <LuUser
                      size={18}
                      className="bg-gray-200 text-gray-900 rounded-full p-0.5"
                    />
                    {data?.owner?.slice(0, 20)}...
                    <GoArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineModal;

import { supabase } from "../supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductData, ProductFormData } from "../utils/types";
import { FiUser } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import {
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiOutlineIdentification,
} from "react-icons/hi";
import { AiOutlineProduct } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { imgURL, productImages } from "../utils/constants";
import TimelineModal from "../components/TimelineModal";
import { FaStar } from "react-icons/fa6";
// import BatchDetailSkeleton from "../components/skeletons/BatchDetailSkeleton";
// import { formatDate2 } from "../utils/lib";

const BatchDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [batchData, setBatchData] = useState<ProductFormData | null>(null);
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const getProduct = async () => {
    console.log("id", id);
    setLoading(true);
    const { data } = await supabase
      .from("product")
      .select("*")
      .eq("id", id)
      .single();
    setProductData(data);
    setLoading(false);
  };

  const getBatch = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("batch")
      .select("*")
      .eq("batchId", productData?.batchId)
      .single();
    setBatchData(data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
    if (productData?.batchId) {
      getBatch();
    }
  }, []);
  
  // const expirationDate = data?.expirationDate
  //   ? new Date(data.expirationDate)
  //   : null;
  // const formattedDate = expirationDate
  //   ? formatDate2(expirationDate)
  //   : "Invalid Date";

  const getImage = (batchId: string | number | undefined) => {
    return productImages[batchId];
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center min-h-screen mt-20">
      <div className="container mx-auto  bg-white rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Image Container */}
          <div className=" lg:col-span-2 flex justify-center lg:justify-end">
            <img
              src={getImage(productData?.batchId) || imgURL}
              alt="Yellow Tropical Printed Shirt"
              className="max-h-[70vh] w-full object-cover p-4 lg:p-16"
            />
          </div>

          {openModal && (
            <TimelineModal
              productName={productData?.productName || ""}
              setOpenModal={setOpenModal}
              batchId={productData?.batchId || ""}
            />
          )}

          {/* Data Section */}
          <div className="lg:col-span-3 flex flex-col  justify-start p-8 ">
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setOpenModal(true)}
                className="flex items-center gap-2 px-4  text-xs font-semibold text-gray-600 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-150"
              >
                View History
                <GoArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-lg font-medium leading-8 text-green-600 mb-4">
              {batchData?.batchName}&nbsp; /&nbsp; {productData?.productId}
            </p>
            <h2 className="text-2xl font-semibold text-gray-700">
              {productData?.productName}
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                ${productData?.price}
              </h6>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-green-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                  1624 review
                </span>
              </div>
            </div>

            <p className="text-gray-600 py-4 text-sm">
              {productData?.productDesc}
            </p>

            {/* Date/Time List */}
            <div className="grid grid-cols-1  divide-y divide-gray-100 text-sm">
              <div className="flex items-center gap-3 text-gray-600 py-4">
                <HiOutlineIdentification
                  className="w-6 h-5 text-gray-500 rounded-full  />
                    <p"
                />
                <p className="font-medium">Batch ID:</p>
                <p>{batchData?.batchId ?? "N/A"}</p>
              </div>

              <div className="flex items-center gap-3 text-gray-600 py-4">
                <HiOutlineCalendar
                  className="w-6 h-5 text-gray-500 rounded-full  />
                    <p"
                />
                <p className="font-medium">Expire Date:</p>
              </div>

              <div className="flex items-center gap-3 text-gray-600 py-4">
                <FiUser
                  className="w-6 h-5 text-gray-500 rounded-full  />
                    <p"
                />
                <p className="font-medium">Current Owner:</p>
                <p>{batchData?.currentOwner ?? "N/A"}</p>
              </div>

              <div className="flex items-center gap-3 text-gray-600 py-4">
                <HiOutlineOfficeBuilding
                  className="w-6 h-5 text-gray-500 rounded-full  />
                    <p"
                />
                <p className="font-medium">Manufacturer:</p>
                <p>{batchData?.manufacturer ?? "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 py-4">
                <AiOutlineProduct className="w-6 h-5 text-gray-500 rounded-full shrink-0 " />
                <p className="font-medium whitespace-nowrap">
                  No. of products:
                </p>
                <p>{batchData?.manufacturer ?? "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 py-4">
                <GrTransaction className="w-4 h-5 text-gray-500  rounded-full shrink-0" />
                <p className="font-medium whitespace-nowrap">
                  No. of Transactions:
                </p>
                <p>{batchData?.manufacturer ?? "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchDetail;

import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = () => {
  return (
    <div className="max-w-xl">
      <div className="w-full">
        <div className="relative">
          <input
            type="text"
            className="py-3 px-4 block w-full  rounded-full text-sm  border"
            required
            placeholder="Search Product"
          />
          <button className="absolute inset-y-0 end-0 flex items-center  pe-3">
            <FaMagnifyingGlass className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

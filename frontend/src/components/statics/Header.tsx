import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { nav_links } from "../../utils/constants";
import SearchBar from "../SearchBar";
import { IoCartOutline } from "react-icons/io5";
import { useMainContext } from "../../context/MainContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { cartNumber } = useMainContext();

  return (
    <header className="fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-2 top-0 left-0 bg-gray-50/80 backdrop-blur-md">
      <nav className="relative max-w-[85rem] w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-0 mx-auto">
        {/* Logo Section */}
        <div className="md:col-span-2">
          <Link
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            to="/"
          >
            <div className="flex items-center">
              <img
                src="/faittoLogo.png"
                alt="Logo"
                className="h-8 w-8 rounded mr-2"
              />
              <p className="text-green-900 font-bold text-2xl">Faitto.</p>
            </div>
          </Link>
        </div>

        {/* Contact Button */}
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-2 mx-2">
          <button
            type="button"
            className="px-4 py-2 rounded-full border bg-green-800 text-white font-medium text-sm"
          >
            Connect wallet
          </button>
          <div className="relative">
            <Link to="/cart" className="text-gray-800 text-2xl">
              <IoCartOutline />
            </Link>
            <span className="absolute -top-2 -right-1 bg-green-600 text-white text-xs  rounded-full font-medium size-4 flex justify-center items-center">
              {cartNumber}
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center justify-end md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl" />
            )}
          </button>
        </div>

        {/* Main Navigation */}
        <div
          className={`${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:block transition-all duration-500 ease-in-out overflow-hidden md:max-h-none md:opacity-100 basis-full grow md:w-auto md:basis-auto md:order-2 md:col-span-8`}
        >
          <div className="flex w-full justify-between items-center">
            {/* Search Bar */}
            <div className="w-[45%]">
              <SearchBar />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-10 md:mt-0">
              {nav_links.map((item, index) => (
                <div key={index}>
                  <Link
                    className={`relative font-semibold inline-block pb-1 text-base whitespace-nowrap
                    ${
                      location.pathname === item.href
                        ? "text-gray-950 focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-green-600"
                        : "text-gray-700"
                    }`}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Cart Icon */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

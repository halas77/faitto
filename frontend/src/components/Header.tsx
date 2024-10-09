import { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

import { Link, useLocation } from "react-router-dom";
import { nav_links } from "../utils/constants";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

 

  return (
    <>
      <div
        className={`top-0 left-0 w-full fixed z-[9999] transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-lg:container max-w-[85rem]  mx-auto py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-3xl font-semibold text-gray-950 flex gap-2 items-center max-sm:pl-4"
            >
              Faitto.
            </Link>

            {/* Navigation Menu */}
            <div className="hidden xl:block">
              <ul className="flex lg:space-x-5 xl:space-x-4 2xl:space-x-8">
                {nav_links.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={
                        !scrolled && pathname.pathname === "/serviceone"
                          ? pathname.pathname === item.href
                            ? "text-green-500  p-2 rounded-lg font-medium text-lg"
                            : "text-slate-50 hover:text-green-500 ease-in-out duration-100 text-lg"
                          : pathname.pathname === item.href
                          ? "text-green-500  p-2 rounded-lg font-medium text-lg"
                          : "text-slate-700 hover:text-green-500 ease-in-out duration-100 text-lg"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                
              </ul>
            </div>
            <div className="text-sm gap-2 block lg:hidden pr-3">
              <button className="" onClick={handleOpenNavbar}>
                <div className="text-black">
                  {!openNavbar ? (
                    <CgMenuLeft size={35} />
                  ) : (
                    <LiaTimesSolid size={35} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          openNavbar
            ? "z-[9999] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-start p-3">
          <Link
            to="/"
            className="text-2xl font-extrabold text-slate-50 flex gap-2 items-center"
          >
            Faitto
          </Link>
        </div>

        <ul className="p-4">
          {nav_links.map((link) => (
            <li key={link.href} className="p-4 border-b border-gray-900">
              <Link to={link.href} className="uppercase text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;

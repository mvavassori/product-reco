"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (category) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      <nav className="px-4 py-2 flex justify-between items-center bg-white border-b-2 sticky top-0 z-50">
        <div className="flex justify-start w-full items-center">
          <Link href="#" className="text-2xl font-bold text-violet-600">
            CoomunityReco
          </Link>
          <div className="hidden lg:flex justify-start space-x-4 items-center ml-12">
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("kitchen")}
              onMouseLeave={() => toggleDropdown("kitchen")}
            >
              <button
                className={`z-50 bg-white font-bold ${
                  dropdownOpen.kitchen ? "underline" : ""
                }`}
              >
                Kitchen
              </button>
              {dropdownOpen.kitchen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded py-1 z-50">
                  <Link
                    href="/kitchen/knives"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Knives
                  </Link>
                  <Link
                    href="/kitchen/pots"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Pots
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("tech")}
              onMouseLeave={() => toggleDropdown("tech")}
            >
              <button
                className={`z-50 bg-white font-bold ${
                  dropdownOpen.tech ? "underline" : ""
                }`}
              >
                Tech
              </button>
              {dropdownOpen.tech && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded py-1 z-50">
                  <Link
                    href="/tech/phones"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Phones
                  </Link>
                  <Link
                    href="/tech/laptops"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Laptops
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="lg:hidden ml-auto">
            <button
              className="navbar-burger flex items-center text-violet-600 p-1"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile navbar */}
      <div
        className={`fixed bg-white top-8 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto transition-transform duration-200 ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={() => toggleDropdown("kitchen")}
          className="text-lg font-semibold flex justify-between items-center px-4"
        >
          Kitchen
          <span className="transition-transform duration-200">
            {dropdownOpen.kitchen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  d="m1 10l6.5-7l6.5 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`transition-height duration-200 ease-in-out ${
            dropdownOpen.kitchen ? "h-auto" : "h-0 overflow-hidden"
          }`}
        >
          <Link
            href="/kitchen/knives"
            className="block px-4 py-2 hover:bg-gray-200 rounded"
          >
            Knives
          </Link>
          <Link
            href="/kitchen/pots"
            className="block px-4 py-2 hover:bg-gray-200 rounded"
          >
            Pots
          </Link>
        </div>
        <button
          onClick={() => toggleDropdown("tech")}
          className="text-lg font-semibold flex justify-between items-center px-4"
        >
          Tech
          <span className="transition-transform duration-200">
            {dropdownOpen.tech ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  d="m1 10l6.5-7l6.5 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`transition-height duration-200 ease-in-out ${
            dropdownOpen.tech ? "h-auto" : "h-0 overflow-hidden"
          }`}
        >
          <Link
            href="/tech/phones"
            className="block px-4 py-2 hover:bg-gray-200 rounded"
          >
            Phones
          </Link>
          <Link
            href="/tech/laptops"
            className="block px-4 py-2 hover:bg-gray-200 rounded"
          >
            Laptops
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

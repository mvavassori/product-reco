"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (category) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Function to close the dropdown menu when a subcategory link is clicked
  const closeDropdownOnSubcategoryClick = (category) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [category]: false,
    }));
  };

  // Add an event listener to handle link clicks in the mobile menu and logo
  useEffect(() => {
    const closeMenuOnLinkClick = () => {
      setMenuOpen(false);
    };
    document.querySelectorAll(".mobile-menu-link").forEach((link) => {
      link.addEventListener("click", closeMenuOnLinkClick);
    });
    document
      .querySelector(".mobile-menu-logo")
      .addEventListener("click", closeMenuOnLinkClick);
    // Clean up the event listeners when the component is unmounted
    return () => {
      document.querySelectorAll(".mobile-menu-link").forEach((link) => {
        link.removeEventListener("click", closeMenuOnLinkClick);
      });
      document
        .querySelector(".mobile-menu-logo")
        .removeEventListener("click", closeMenuOnLinkClick);
    };
  }, []);

  return (
    <>
      <nav className="px-4 py-2 items-center bg-white border-b-2 sticky top-0 z-50">
        <div className="flex justify-between md:justify-start w-full items-center">
          <Link href="/" className="text-3xl font-bold mobile-menu-logo">
            <span className="">standard</span>
            <span className="text-red-600">pick</span>
            <span className="text-lg">.com</span>
          </Link>
          <div className="hidden md:flex justify-start space-x-4 items-center ml-12">
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("sports")}
              onMouseLeave={() => toggleDropdown("sports")}
            >
              <button
                className={`z-50 bg-white font-bold text-lg ${
                  dropdownOpen.sports
                    ? "underline decoration-red-600 decoration-4"
                    : ""
                }`}
              >
                Sports
              </button>
              {dropdownOpen.sports && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded py-1 z-50 text-md">
                  <Link
                    href="/posts/road-bikes"
                    className="block px-4 py-2 hover:text-red-600 hover:underline whitespace-nowrap overflow-hidden"
                    onClick={() => closeDropdownOnSubcategoryClick("sports")}
                  >
                    Road Bikes
                  </Link>
                  <Link
                    href="/posts/running-shoes"
                    className="block px-4 py-2 hover:text-red-600 hover:underline whitespace-nowrap overflow-hidden"
                    onClick={() => closeDropdownOnSubcategoryClick("sports")}
                  >
                    Running Shoes
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("kitchen")}
              onMouseLeave={() => toggleDropdown("kitchen")}
            >
              <button
                className={`z-50 bg-white font-bold text-lg ${
                  dropdownOpen.kitchen
                    ? "underline decoration-red-600 decoration-4"
                    : ""
                }`}
              >
                Kitchen
              </button>
              {dropdownOpen.kitchen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded py-1 z-50 text-md">
                  <Link
                    href="/kitchen/knives"
                    className="block px-4 py-2 hover:text-red-600 hover:underline whitespace-nowrap overflow-hidden"
                    onClick={() => closeDropdownOnSubcategoryClick("kitchen")}
                  >
                    Knives
                  </Link>
                  {/* <Link
                    href="/kitchen/pots"
                    className="block px-4 py-2 hover:text-red-600 hover:underline whitespace-nowrap overflow-hidden"
                    onClick={() => closeDropdownOnSubcategoryClick("kitchen")}
                  >
                    Pots
                  </Link> */}
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("tech")}
              onMouseLeave={() => toggleDropdown("tech")}
            >
              <button
                className={`z-50 bg-white font-bold text-lg ${
                  dropdownOpen.tech
                    ? "underline decoration-red-600 decoration-4"
                    : ""
                }`}
              >
                Tech
              </button>
              {dropdownOpen.tech && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded py-1 z-50">
                  <Link
                    href="/posts/phones"
                    className="block px-4 py-2 hover:text-red-600 hover:underline whitespace-nowrap overflow-hidden"
                  >
                    Phones
                  </Link>
                  {/* <Link
                    href="/posts/laptops"
                    className="block px-4 py-2 hover:text-red-600 hover:underline whitespace-nowrap overflow-hidden"
                  >
                    Laptops
                  </Link> */}
                </div>
              )}
            </div>
          </div>
          <button
            className="md:hidden items-center p-1"
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
      </nav>
      {/* Mobile navbar when click on Hamburger icon */}
      <nav
        className={`fixed bg-white top-12 left-0 bottom-0 flex flex-col w-full max-w-full py-6 px-6 border-r transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        } transform ${isMenuOpen ? "translate-x-0 z-50" : "translate-x-full"}`}
      >
        <button
          onClick={() => toggleDropdown("sports")}
          className="text-xl font-semibold flex justify-between items-center px-4 py-2"
        >
          Sports
          <span className="transition-transform duration-200">
            {dropdownOpen.sports ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
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
                  strokeLinecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-200 ease-in-out overflow-hidden ${
            dropdownOpen.sports
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="/posts/road-bikes"
            className="block px-4 pb-2 active:text-red-600 rounded mobile-menu-link"
          >
            Beginner Road Bikes
          </Link>
          <Link
            href="/posts/running-shoes"
            className="block px-4 pb-2 active:text-red-600 rounded mobile-menu-link"
          >
            Best Road Bikes
          </Link>
        </div>
        <button
          onClick={() => toggleDropdown("kitchen")}
          className="text-xl font-semibold flex justify-between items-center px-4 pb-2"
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
                  strokeLinecap="square"
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
                  strokeLinecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-200 ease-in-out overflow-hidden ${
            dropdownOpen.kitchen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="/kitchen/knives"
            className="block px-4 pb-2 active:text-red-600 rounded mobile-menu-link"
          >
            Knives
          </Link>
          {/* <Link
            href="/kitchen/pots"
            className="block px-4 pb-2 active:text-red-600 rounded mobile-menu-link"
          >
            Pots
          </Link> */}
        </div>
        <button
          onClick={() => toggleDropdown("tech")}
          className="text-xl font-semibold flex justify-between items-center px-4 pb-2"
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
                  strokeLinecap="square"
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
                  strokeLinecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-200 ease-in-out overflow-hidden ${
            dropdownOpen.tech
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="/posts/phones"
            className="block px-4 pb-2 active:text-red-600 rounded mobile-menu-link"
          >
            Phones
          </Link>
          {/* <Link
            href="/posts/laptops"
            className="block px-4 pb-2 active:text-red-600 rounded mobile-menu-link"
          >
            Laptops
          </Link> */}
        </div>
      </nav>
    </>
  );
}

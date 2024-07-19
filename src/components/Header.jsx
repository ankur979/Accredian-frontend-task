import React, { useState } from "react";

const Header = ({openModal}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-6 py-2.5 relative">
          <a href="#refer" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Refer & Earn
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded lg:block hidden"
            onClick={openModal}
            >
              Refer Now
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isOpen ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isOpen ? "block absolute top-14 w-full left-0 bg-white" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#refer"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Refer
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Support
                </a>
              </li>
              <button className="bg-blue-500 text-white px-4 py-2 rounded block lg:hidden">
                Refer Now
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

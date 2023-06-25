import logoTopImage from "/logo-top.png";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="flex justify-between text-primary font-bold p-3">
        <a href="/">
          <img src={logoTopImage} alt="logo-top" className="cursor-pointer" />
        </a>
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="text-gray-400 hover:text-white focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h12v2H4zm0 4h12v2H4zm0 4h12v2H4z"
              />
            )}
          </svg>
        </button>
        <div
          className={`md:flex md:items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-red-400 mr-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-red-400 mr-4"
          >
            Who we are
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-red-400 mr-4"
          >
            Our core values
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-primary hover:text-red-400"
          >
            About us
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

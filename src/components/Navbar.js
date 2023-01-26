import React from "react";
import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3 text-xl">
            {/* <LogoIcon /> */}
            <span className="inline-block py-1 px-2 text-white text-2xl font-medium tracking-wider">
              South of Sleep
            </span>
          </span>
        </Link>
        <Link to="/about" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3">
            About
          </span>
        </Link>
        <Link to="/art" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3">
            Art
          </span>
        </Link>
        <Link to="/music" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3">
            Music
          </span>
        </Link>
        <Link to="/writing" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3">
            Writing
          </span>
        </Link>
        <Link to="/archive" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3">
            Archive
          </span>
        </Link>
        <Link to="/shop" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="flex items-center justify-center ml-3">
            Shop
          </span>
        </Link>
        <CartSummary />
        <CheckoutCart />
      </div>
    </header>
  );
}

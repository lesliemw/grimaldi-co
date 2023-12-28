import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

import SearchBar from "./SearchBar";
import CartPopper from "../cart/CartPopper";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="grid grid-cols-3 w-full md: lg:p-5 p-1 justify-between items-center font-extralight bg-white fixed top-0 z-50">
      <div className="flex items-center justify-start ">
        <RxHamburgerMenu className="m-2 text-sm md:text-md lg:text-2xl" />
        {window.innerWidth > 600 && <SearchBar />}
      </div>

      <NavLink to="/">
        <img
          className="lg:w-96 w-60  max-h-24 justify-center relative"
          src="../../fullBranding.png"
        />
      </NavLink>
      <div className="flex justify-end invisible sm:visible">
        <NavLink to="/account">
          <button className="flex p-2 items-center">
            <GoPerson className="m-2 text-sm md:text-md lg:text-2xl" />
            <span>Account</span>
          </button>
        </NavLink>
        <button className="flex p-2 items-center" onClick={handleClick}>
          <IoBagHandleOutline className="m-2 text-sm md:text-md lg:text-2xl" />
          <span>Cart</span>
        </button>
        {isOpen && <CartPopper />}
      </div>
    </header>
  );
}

export default Header;

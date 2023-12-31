import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

import SearchBar from "./SearchBar";
import CartPopper from "../cart/CartPopper";
import { NavLink } from "react-router-dom";
import { useIsOpen } from "../context/IsOpenContext";
import Sidebar from "./Sidebar";
import { useIsOpenSidebar } from "../context/isOpenSidebarContext";

function Header() {
  const { isOpen, isOpenToggle } = useIsOpen();
  const { isOpenSidebar, isOpenSidebarToggle } = useIsOpenSidebar();

  return (
    <header className="grid grid-cols-3 w-full lg:p-3 p-1  items-center font-themeFont font-extralight bg-white fixed top-0 z-10 justify-items-center">
      <div className="flex items-center ml-5 cursor-pointer ">
        <RxHamburgerMenu
          className="m-2 text-sm md:text-md lg:text-2xl"
          onClick={isOpenSidebarToggle}
        />
        <span>Menu</span>
        {isOpenSidebar && <Sidebar />}
        {window.innerWidth > 600 && <SearchBar />}
      </div>
      <div>
        <NavLink to="/">
          <img
            className="lg:w-80 w-52  max-h-24 "
            src="../../fullBranding.png"
          />
        </NavLink>
      </div>
      <div className="flex  mr-5 invisible sm:visible">
        <NavLink to="/account">
          <button className="flex p-2 items-center">
            <GoPerson className="m-2 text-sm md:text-md lg:text-2xl" />
            <span>Account</span>
          </button>
        </NavLink>
        <button className="flex p-2 items-center" onClick={isOpenToggle}>
          <IoBagHandleOutline className="m-2 text-sm md:text-md lg:text-2xl" />
          <span>Cart</span>
        </button>
        {isOpen && <CartPopper />}
      </div>
    </header>
  );
}

export default Header;

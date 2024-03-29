import { useUser } from "../context/UserContext";
import { GoPerson } from "react-icons/go";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AccountDropdownMenu() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  async function handleSignOut(e) {
    e.preventDefault();
    if (user)
      axios.post("/user/logout").then(() => {
        navigate("/");
        setUser(false);
        toast.success("You have logged out. 👋");
      });
    else {
      toast.error("Error trying to logout. Please try again 😢");
    }
  }

  return (
    <Menu as="div" className="relative inline-block  font-extralight text-left">
      <div>
        <Menu.Button className=" w-full font-themeFont justify-center gap-x-1.5 rounded-md bg-white md:px-3 py-2  text-gray-700  ring-inset   flex md:p-2 items-center">
          <GoPerson className="m-2 text-xl md:text-md lg:text-2xl " />
          <span className="invisible sm:visible">Account</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/"}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Orders
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/"}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Wish List
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={user ? "/account" : "/login"}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account Settings
                </NavLink>
              )}
            </Menu.Item>

            <form method="POST">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                    to={user ? "/" : "/login"}
                    onClick={user && handleSignOut}
                  >
                    {user ? "Sign Out" : "Sign In"}
                  </NavLink>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

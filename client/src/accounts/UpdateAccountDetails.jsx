import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

import axios from "axios";
import { useState } from "react";

export default function UpdateAccountDetails() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    fname: user ? user.fname : "",
    lname: user ? user.lname : "",
    email: user && user.email,
    city: user ? user.city : "",
    country: user ? user.country : "",
    county: user ? user.county : "",
    postalCode: user ? user.postalCode : "",
    streetAddress: user ? user.streetAddress : "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleUpdateAccount(e) {
    e.preventDefault();
    try {
      await axios.patch("/user/profile/update", formData);
      toast.success("Account details updated.");
      return;
    } catch (e) {
      toast.error("Could not update account details. Please try again later.");
    }
  }

  return (
    <form
      className="m-40 place-center font-themeFont w-auto"
      method="PATCH"
      onSubmit={handleUpdateAccount}
    >
      <div className="space-y-12 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Account Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Let us know where to send your orders.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="fame"
                  defaultValue={user.fname}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  defaultValue={user.lname}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  disabled
                  defaultValue={user.email}
                  value={user.email}
                  autoComplete="email"
                  className="disabled:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  defaultValue={user.country}
                  onChange={handleInputChange}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer"
                >
                  <option name="Ireland" value="Ireland">
                    Ireland
                  </option>
                  <option name="Northern Ireland" value="Northern Ireland">
                    Northern Ireland
                  </option>
                  <option name="Great Britain" value="Great Britain">
                    Great Britain
                  </option>
                  <option name="France" value="France">
                    France
                  </option>
                  <option name="Spain" value="Spain">
                    Spain
                  </option>
                  <option name="Italy" value="Italy">
                    Italy
                  </option>
                  <option name="Germany" value="Germany">
                    Germany
                  </option>
                  <option name="USA" value="USA">
                    USA
                  </option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  defaultValue={user.streetAddress}
                  onChange={handleInputChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  defaultValue={user.city}
                  onChange={handleInputChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="county"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                County / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="county"
                  id="county"
                  defaultValue={user.county}
                  onChange={handleInputChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  defaultValue={user.postalCode}
                  onChange={handleInputChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We&apos;ll always let you know about important changes, but you pick
            what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                By Email
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="orderDetails"
                      name="orderDetails"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="orderDetails"
                      className="font-medium text-gray-900"
                    >
                      Order Details
                    </label>
                    <p className="text-gray-500">
                      Get notified when a there are changes to order details
                      (i.e when an item has shipped).
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Offers
                    </label>
                    <p className="text-gray-500">
                      Get notified of the latest offers.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="m-6 flex items-center justify-end gap-x-6 ">
            <button
              type="button"
              className="text-sm font-semibold cursor-pointer leading-6 text-gray-900"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

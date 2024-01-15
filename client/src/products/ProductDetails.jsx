import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddToCartButton from "../ui/AddToCartButton";
import HeartButton from "../ui/HeartButton";

//actions
import { getItemDetails } from "../redux/actions/itemActions";
import { addToCart } from "../redux/actions/cartActions";
import Loading from "../ui/Loading";

function ProductDetails({ history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const itemDetails = useSelector((state) => state.getItemDetails);
  let { itemId } = useParams();
  const { product, loading, error } = itemDetails;

  useEffect(() => {
    if (product && itemId !== product._id) {
      dispatch(getItemDetails(itemId));
    }
  }, [dispatch, product, itemId]);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      {loading ? (
        <Loading />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product.name}
                className="lg:w-1/2 w-full object-cover object-center"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>

                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  {/* <div className="flex">
                    <span className="mr-3"></span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div> */}
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    €{product.price}
                  </span>
                  <div className="flex gap-4">
                    <HeartButton />
                    <AddToCartButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductDetails;

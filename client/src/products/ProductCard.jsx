import HeartButton from "../ui/HeartButton";
import AddToCartButton from "../ui/AddToCartButton";
import { NavLink } from "react-router-dom";

function ProductCard({ src, name, description, price, productId }) {
  return (
    <div>
      <NavLink to={`/items/${productId}`}>
        <div className="relative ">
          <div className=" w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80 ">
            <img
              src={src}
              alt={name}
              className="h-full w-full object-fill object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm  text-gray-700">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">€{price}</p>
          </div>
        </div>
      </NavLink>
      <div className="flex p-2 justify-between">
        <HeartButton />
        <AddToCartButton />
      </div>
    </div>
  );
}

export default ProductCard;

import HeartButton from "../ui/HeartButton";
import AddToBagButton from "../ui/AddToBagButton";

function ProductCard({ src, alt, name, description, price }) {
  return (
    <div>
      <div className="relative ">
        <div className=" w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80 ">
          <img
            src={src}
            alt={alt}
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
      <div className="flex p-2 justify-between">
        <HeartButton />
        <AddToBagButton />
      </div>
    </div>
  );
}

export default ProductCard;

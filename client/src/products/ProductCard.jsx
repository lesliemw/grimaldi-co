import fakeData from "../../data/fakeStore";

import HeartButton from "../ui/HeartButton";
import AddToBagButton from "../ui/AddToBagButton";

function ProductCard() {
  return (
    <div className="bg-white  font-themeFont">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
        <div className="grid grid-rows-3 w-auto  content-center p-3 ">
          <div className="mt-6 grid grid-cols-1 gap-x-16  gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
            {fakeData.map((product) => (
              <div key={product.id}>
                <div className="relative ">
                  <div className=" w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80 ">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm  text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      €{product.price}
                    </p>
                  </div>
                </div>
                <div className="flex p-2 justify-between">
                  <HeartButton />
                  <AddToBagButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

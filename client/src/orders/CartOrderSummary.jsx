import fakeData from "../../data/fakeStore";
import PlacedOrderCard from "./PlacedOrderCard";

function CartOrderSummary() {
  return (
    <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
        Order Details
      </p>
      {fakeData.map((product) => {
        return (
          <PlacedOrderCard
            key={product.id}
            src={product.image}
            alt={product.alt}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default CartOrderSummary;

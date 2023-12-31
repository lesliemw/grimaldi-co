import HomeScreenCallouts from "../home/HomeScreenCallouts";
import PromoSection from "../home/PromoSection";
import ProductsMap from "../products/ProductsMap";

function Home() {
  return (
    <div className="p-5">
      <PromoSection />
      <HomeScreenCallouts />
      <ProductsMap />
    </div>
  );
}

export default Home;

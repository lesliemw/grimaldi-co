import HomeScreenCallouts from "../home/HomeScreenCallouts";
import PromoSection from "../home/PromoSection";
import ProductCard from "../products/ProductCard";

function Home() {
  return (
    <div>
      <PromoSection />
      <HomeScreenCallouts />
      <ProductCard />
    </div>
  );
}

export default Home;

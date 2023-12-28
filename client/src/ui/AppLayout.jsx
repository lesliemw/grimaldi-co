import HomeScreenCallouts from "../home/HomeScreenCallouts";
import PromoSection from "../home/PromoSection";
import ProductCard from "../products/ProductCard";
import Header from "./Header";

//pages
function AppLayout() {
  return (
    <div className="max-w-screen h-screen">
      <Header />
      <PromoSection />
      <HomeScreenCallouts />
      <ProductCard />
    </div>
  );
}

export default AppLayout;

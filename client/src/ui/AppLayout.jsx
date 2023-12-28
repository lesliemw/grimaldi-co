import { Outlet } from "react-router-dom";
import HomeScreenCallouts from "../home/HomeScreenCallouts";
import PromoSection from "../home/PromoSection";
import ProductCard from "../products/ProductCard";
import Header from "./Header";

//pages
function AppLayout() {
  return (
    <div className="max-w-screen h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

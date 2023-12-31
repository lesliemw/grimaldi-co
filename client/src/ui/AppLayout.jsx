import { Outlet } from "react-router-dom";

import Header from "./Header";
import { IsOpenProvider } from "../context/IsOpenContext";
import Footer from "./Footer";

//pages
function AppLayout() {
  return (
    <div className="max-w-screen h-screen">
      <IsOpenProvider>
        <Header />
      </IsOpenProvider>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

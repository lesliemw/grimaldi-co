import { Outlet } from "react-router-dom";

import Header from "./Header";
import { IsOpenProvider } from "../context/IsOpenContext";
import Footer from "./Footer";
import { IsOpenSidebarProvider } from "../context/isOpenSidebarContext";

//pages
function AppLayout() {
  return (
    <div className="max-w-screen h-screen">
      <IsOpenProvider>
        <IsOpenSidebarProvider>
          <Header />
        </IsOpenSidebarProvider>
      </IsOpenProvider>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

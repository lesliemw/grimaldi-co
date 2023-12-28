import { Outlet } from "react-router-dom";

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

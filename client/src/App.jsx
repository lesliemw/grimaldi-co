import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ErrorPage from "./ui/ErrorPage";
import SignIn from "./pages/SignIn";

function App() {
  //contains router info
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

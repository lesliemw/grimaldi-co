import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ErrorPage from "./ui/ErrorPage";
import SignIn from "./pages/SignIn";
import RegistrationForm from "./ui/RegistrationForm";
import axios from "axios";
import { UserProvider } from "./context/UserContext";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

function App() {
  //contains router info
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<RegistrationForm />} />
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

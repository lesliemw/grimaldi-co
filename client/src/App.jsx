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
import UpdateAccountDetails from "./accounts/UpdateAccountDetails";
import { Toaster } from "react-hot-toast";
import SuccessfulOrderScreen from "./orders/SuccessfulOrderScreen";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

function App() {
  //contains router info
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/" element={<Home />} />
            <Route path="account" element={<Account />} />
            <Route
              path="/account/updateAccountDetails"
              element={<UpdateAccountDetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="orderPlaced" element={<SuccessfulOrderScreen />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000, //3seconds
          },
          error: {
            duration: 5000, //5seconds
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "",
            color: "",
          },
        }}
      />
    </UserProvider>
  );
}

export default App;

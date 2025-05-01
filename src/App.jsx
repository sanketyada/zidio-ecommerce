import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/Pages/Homepage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import CheckOut from "./customer/components/CheckOut/CheckOut";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>


    </div>
  );
}

export default App;

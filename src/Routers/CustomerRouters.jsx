import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import Homepage from "../customer/Pages/Homepage/Homepage";
import Cart from "../customer/components/Cart/Cart";

function CustomerRouters() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path=':/levelOne/:levelTwo/:levelThree'
          element={<Product />}
        ></Route>
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CustomerRouters;

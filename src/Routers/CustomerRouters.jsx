import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/Pages/Homepage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

function CustomerRouters() {
  return (
    <div>
      <div>
      <Navigation />

      </div>
      <Routes>

        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThre' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      </Routes>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default CustomerRouters

import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItems from '../Cart/CartItems'

function OrderSummery() {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md border'>
      <AddressCard />

      </div>
      <div className="lg:grid grid-cols-3  relative ">
      <div className="col-span-2">
        {[1,1,1,1,1].map((item)=><CartItems />)}
      </div>

      <div className="px-5 sticky top-0 h-[100vh] mt-50 lg:mt-0">
        <div className="">
          <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
          <hr />
          {/* Detail */}
          <div className="space-y-3 font-semibold mb-5">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>₹4322</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Discount</span>
              <span className="text-green-600">-₹1278</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Delivery Charge</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Total Amount</span>
              <span className="text-green-600">₹1262</span>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{ px: "2.5rem", py: ".5rem", bgcolor: "#9155fd" }}
              className="w-full "
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummery

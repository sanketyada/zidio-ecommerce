import React from "react";
import CartItems from "./CartItems";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";



function Cart() {
  const navigate = useNavigate()
const handleCheckOut=()=>{
  navigate('/checkout?step=2')
}
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
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
              onClick={handleCheckOut}
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
  );
}

export default Cart;

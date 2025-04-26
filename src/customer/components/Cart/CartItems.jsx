import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CartItems() {
  return (
    <div className="p-5 shadow-lg  rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men slim Back PAnt</p>
          <p className="opacity-70 ">Size:L</p>
          <p className="opacity-70 mt-2">Seller:Hildyani Groups</p>

          <div className=" flex space-x-5 items-center text-grey-900 pt-6">
            <p className="font-semibold ">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className=" text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton  sx={{color:"RGB(145 85 254)"}}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7  rounded-sm">3</span>
          <IconButton sx={{color:"RGB(145 85 254)"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button>REmove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

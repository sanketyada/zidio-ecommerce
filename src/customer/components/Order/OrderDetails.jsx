import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function OrderDetails() {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-xl p-5 w-full mb-10 "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item size={{ xs: 6 }}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold ">Tasty Pizza Printed Cloth</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color:Megenta</span>Size:M
                  </p>
                  <p>Seller:Indrani</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2 " />
                <span>Rate and Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;

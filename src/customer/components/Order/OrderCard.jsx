import { Grid } from "@mui/material";
import React from "react";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import { useNavigate } from "react-router-dom";

function OrderCard() {
  const navigate =  useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} 
    className="p-5 shadow-md hover:shadow-2xl ">
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
        className=""
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Title of The Cloth</p>
              <p className="opacity-50 font-semibold text-xs">Size:M</p>
              <p>Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item size={{ xs: 2 }}>
          <p>₹1999</p>
        </Grid>
        <Grid item size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustOutlinedIcon className="text-green-600 mr-2" />
                <span>Deleverd On March 03</span>
              </p>
              <p className="text-xs">
                Your item has been Deleverd.

              </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delevery on Mar 03 </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;

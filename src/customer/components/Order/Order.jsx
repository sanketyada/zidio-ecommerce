import React from "react";
import Grid from "@mui/material/Grid";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" }, // corrected spelling
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

function Order() {
  return (
    <div className="px-5 lg:px-20  ">
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item size={{ xs: 12,  md: 3 }} >
          <div className="h-auto shadow-lg p-5 sticky top-5" style={{ backgroundColor: '#0f172a',boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}>
            <h1 className="font-bold text-lg text-green-700">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold text-green-700">Order Status</h1>
              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={option.value}
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item  size={{ xs:9 }} >
         <div className="space-y-5">
         {[1,1,1,1,1,1].map((item)=><OrderCard/>)}
         </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;

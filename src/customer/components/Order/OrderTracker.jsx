// import { Step, StepLabel, Stepper } from '@mui/material'
// import React from 'react'
// import { Typography } from '@mui/material';


// const steps=[
//     "Placed",
//     "Order Confirmed",
//     "shiped",
//     "Out for Delivery",
//     "Deliverd"

// ]

// function OrderTracker(activeStep) {
//   return (
//     <div className='w-full'>
//       <Stepper activeStep={activeStep} alternativeLabel>

//         {steps.map((label)=> <Step>
//             <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>
//                 {label}
//             </StepLabel>
//         </Step>  )}

//       </Stepper>
//     </div>
//   )
// }

// export default OrderTracker
import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered"
];

function OrderTracker({ activeStep }) {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color:
                    index < activeStep
                      ? 'green'
                      : index === activeStep
                      ? '#9155FD'
                      : 'gray'
                }}
              >
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default OrderTracker;

import { Grid } from '@mui/material'
import React from 'react'

function OrderCard() {
  return (
    <div>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img src="" alt="" />
                <div className='ml-5'>
                    <p>Title</p>
                    <p>Size:M</p>
                    <p>Color:Black</p>
                </div>
            </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard

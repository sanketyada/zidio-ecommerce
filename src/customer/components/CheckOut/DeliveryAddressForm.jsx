import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

function DeliveryAddressForm() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid className="rounded-0-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p5">
                <form >
                    <Grid  container spacing={3}>
                        <Grid item xs={12} sm={16}>
                            <TextField
                            required
                            id="firstname"
                            name="firstNamne"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name" 
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressForm;

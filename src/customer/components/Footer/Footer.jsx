import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 5, px: 2 }}>
      <Grid container spacing={4} justifyContent="space-evenly">
        
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Button color="inherit">About Us</Button><br/>
          <Button color="inherit">Careers</Button><br/>
          <Button color="inherit">Press</Button><br/>
          <Button color="inherit">Blog</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Button color="inherit">Help Center</Button><br/>
          <Button color="inherit">FAQs</Button><br/>
          <Button color="inherit">Terms</Button><br/>
          <Button color="inherit">Privacy</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Button color="inherit">My Account</Button><br/>
          <Button color="inherit">Track Order</Button><br/>
          <Button color="inherit">Shipping</Button><br/>
          <Button color="inherit">Returns</Button>
        </Grid>

        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Button color="inherit" startIcon={<InstagramIcon />}>Instagram</Button><br/>
          <Button color="inherit" startIcon={<FacebookIcon />}>Facebook</Button><br/>
          <Button color="inherit" startIcon={<TwitterIcon />}>Twitter</Button><br/>
          <Button color="inherit" startIcon={<YouTubeIcon />}>YouTube</Button>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', pt: 5, fontSize: '0.9rem', color: '#aaa' }}>
        &copy; {new Date().getFullYear()} SuperHero Store. All rights reserved.
      </Box>
    </Box>
  );
}

export default Footer;

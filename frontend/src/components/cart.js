import Navbar from "./Navbar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import { Box, Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import NumericInput from 'react-numeric-input';
import Button from '@mui/material/Button';
import { sizing } from '@mui/system';

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CardHeader from "@mui/material/CardHeader";
// import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Cart() {
  return (
  <div >
  {/*<p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>*/}
   <br />

    <Box sx={{flexGrow:1, width: "75vw",display: "flex", justifyContent: "center"}}>
       <Grid container spacing = {2}>
         <Grid Item xs={8}>
            <Grid container spacing = {2} sx={{alignItems: "center"}}>
                <Grid item xs={2}>
                    <h2>IMG</h2>
                </Grid>
                <Grid item xs={2}>
                    <h2>ITEM</h2>
                    <p>ITEM DESCRIPTION</p>
                </Grid>
                <Grid item>
                    <NumericInput min={1} value={1} />
                </Grid>
                <Grid item>
                    <h2>$PRICE</h2>
                </Grid>
            </Grid>
         </Grid>
        <Grid Item xs={4}>
            <Item>
                <h2>Subtotal</h2>
                <h2>Shipping</h2>
                <h2>Tax</h2>
                <h1>TOTAL PRICE</h1>
            </Item>
            <br />
            <Button variant="contained">Check Out</Button>

        </Grid>
       </Grid>
    </Box>
  </div>
  );
}

export default Cart;

import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Appraise from "./appraiser";
import { CartContext } from "../contexts/cartContext";
import { PageContext } from "../contexts/pageContext";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { page, setPage } = useContext(PageContext);

  const [subtotal, setSubtotal] = useState(0);

  const getSubtotal = () => {
    let sum = 0;
    cartItems &&
      Object.keys(cartItems).forEach(
        (book) => (sum += Appraise(book) * cartItems[book].count)
      );
    setSubtotal(sum);
  };

  useEffect(() => {
    setPage(window.location.href);
    getSubtotal();
  }, [cartItems]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <br /> <br /> <br /> <br />
        <Box
          sx={{
            flexGrow: 1,
            width: "75vw",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Grid container spacing={2} sx={{ alignItems: "flex-start" }}>
            <Grid Item container spacing={2} xs={8}>
              <Stack>
                {!cartItems && (
                  <>
                    <Item style={{ width: "50vw" }}>
                      <br />
                      <br />
                      <br />
                      <h1>No Items in the Cart!</h1>
                      <br />
                      <br />
                      <br />
                    </Item>
                  </>
                )}
                <p></p>
                {cartItems &&
                  Object.keys(cartItems).map((book) => {
                    if (cartItems[book].count > 0) {
                      return (
                        <>
                          <Item>
                            <Grid
                              container
                              spacing={2}
                              columns={16}
                              sx={{ alignItems: "center" }}
                            >
                              <Grid item xs={3}>
                                <img
                                  src={cartItems[book].img}
                                  width={64}
                                  alt={book + " by " + cartItems[book].author}
                                />
                              </Grid>
                              <Grid item xs={3}>
                                {book}
                              </Grid>
                              <Grid item xs={3}>
                                {cartItems[book].author}
                              </Grid>

                              <Grid item xs={3}>

                                <TextField
                                  id="outlined-number"
                                  label="Count"
                                  type="number"
                                  size="small"
                                  inputProps={{ min: 0, max: 20 }}
                                  defaultValue={cartItems[book].count}
                                  onChange={(e) => {
                                    let temp = JSON.parse(
                                      JSON.stringify(cartItems)
                                    );
                                    temp[book].count = e.target.value;
                                    setCartItems(temp);
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  style={{ width: "50%" }}
                                />
                              </Grid>

                              <Grid item xs={2}>

                                ${cartItems[book].count * Appraise(book)}
                              </Grid>
                              <Grid item xs = {2}>
                                <IconButton aria-label="delete" size="large" onClick={()=>{
                                  let temp = JSON.parse(
                                      JSON.stringify(cartItems)
                                  );
                                  temp[book].count = 0;
                                  setCartItems(temp);
                                }}>
                                  <DeleteIcon fontSize="inherit" />
                                 </IconButton>
                              </Grid>
                            </Grid>
                          </Item>
                        </>
                      );
                    } else {
                      delete cartItems[book];
                      if (Object.keys(cartItems).length <= 0) {
                        return (
                          <>
                            <Item style={{ width: "50vw" }}>
                              <br />
                              <br />
                              <br />
                              <h1>No Items in the Cart!</h1>
                              <br />
                              <br />
                              <br />
                            </Item>
                          </>
                        );
                      }
                    }
                  })}
              </Stack>
            </Grid>
            <Grid Item xs={4} alignItems={"flex-start"}>
              <Item>
                <h4>Subtotal: ${subtotal}</h4>
                <h4>Shipping: {subtotal === 0 ? "$0" : "$5"}</h4>
                <h4>Tax: ${(subtotal * 0.05).toFixed(2)}</h4>

                <Divider variant="middle" /><br />
                <h3>Total: ${(subtotal+subtotal*0.05+(subtotal===0?0:5)).toFixed(2)}</h3>
                </Item>
              <br />
              <Button variant="contained" onClick={() => getSubtotal()}>Check Out</Button>

            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Cart;

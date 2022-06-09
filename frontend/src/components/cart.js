import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NumericInput from 'react-numeric-input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Appraise from './appraiser';
import { CartContext } from "../contexts/cartContext";
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Cart() {
  // const { cartItems, setCartItems } = useContext(CartContext);
  // (e) => cartItems[book].count = e.currentTarget.value
  // let cart = cartItems;
  const { cartItems, setCartItems } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);

  const getSubtotal = () => {
    let sum = 0;
    cartItems&&Object.keys(cartItems).forEach(book => sum += Appraise(book) * cartItems[book].count);
    setSubtotal(sum);
  };

  //useState, useReducer (get functions to change it)

  useEffect(() => {
    getSubtotal();
  }, [cartItems]
  );


  return (
    <div >
      <br />  <br />  <br />  <br />
      <Box sx={{ flexGrow: 1, width: "75vw", display: "flex", justifyContent: "flex-start" , alignItems: "flex-start" }}>
        <Grid container spacing={2} sx={{alignItems: "flex-start"}}>
          <Grid Item container spacing={2} xs={8}>

            {/*{console.log(Object.keys(cartItems)}*/}
            <Stack>
              {/*<p>hi</p>*/}
             {!cartItems&&
               <>
                 <Item style={{ width: "50vw" }}>
                    <br/><br/><br/>
                    <h1>No Items in the Cart!</h1>
                    <br/><br/><br/>
                 </Item>
               </>
             }
  
              {cartItems&&Object.keys(cartItems).map((book) => {
                return (
                  <><Item>
                    <Grid container spacing={2} columns={16} sx={{ alignItems: "center" }}  >
                      <Grid item xs={3}><img src={cartItems[book].img} width={64} alt={book + " by " + cartItems[book].author} /></Grid>
                      {/*{console.log(book)}*/}
                      <Grid item xs={3}>{book}</Grid>
                      <Grid item xs={3}>{cartItems[book].author}</Grid>
                      <Grid item xs={4}>
                        {/*<NumericInput min={1} value={cartItems[book].count} onChange={() => cartItems[book].count += 1} />*/}
                        <TextField
                            id="outlined-number"
                            label="Count"
                            type="number"
                            size="small"
                            min = "0"
                            inputProps={{ min: 1, max: 20 }}
                            defaultValue= {cartItems[book].count}
                                onChange={(e) => {
                              let temp = JSON.parse(JSON.stringify(cartItems));
                              temp[book].count = e.target.value;
                              setCartItems(temp);
                            }}
                            // width = {.7}
                            InputLabelProps={{
                              shrink: true,
                              inputProps: { min: 0, max: 10 }

                            }}
                            style ={{width: '50%'}}
                        />
                      </Grid>
                      {/*{cartItems[book].count}*/}
                      <Grid item xs={3}>${cartItems[book].count * Appraise(book)}</Grid>
                    </Grid>
                  </Item>
                  </>)
              })}
            </Stack>
          </Grid>
          <Grid Item xs={4} alignItems={'flex-start'}>
            <Item>
              {/*{getSubtotal()}*/}
              <h2>Subtotal: ${subtotal}</h2>
              <h2>Shipping: $5</h2>
              <h2>Tax: ${(subtotal * .05).toFixed(2)}</h2>
              <h1>Total: ${(subtotal * 1.05 + 5).toFixed(2)}</h1>
            </Item>
            <br />
            {/* <Button variant="contained" onClick={() => getSubtotal()}>Check Out</Button> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Cart;

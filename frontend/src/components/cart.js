import * as React from 'react';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NumericInput from 'react-numeric-input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Appraise from './appraiser';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let sample_cart = {
    "Wuthering Heights": {author: "Emily Bronte", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg/800px-Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg",count: 2},
    "Jane Eyre": {author: "Charlotte Bronte", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/800px-Jane_Eyre_title_page.jpg", count: 1},
    "To Kill a Mockingbird": {author: "Harper Lee", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg", count: 2},
};

function Cart() {
  // let cart = sample_cart;
    const [subtotal, setSubtotal] = useState(0);

    const getSubtotal = () => {
        let sum = 0;
        Object.keys(sample_cart).forEach(book => sum+= Appraise(book)*sample_cart[book].count);
        setSubtotal(sum);
    };

    useEffect(() => {
        getSubtotal();
        }, []
    );


  return (
  <div >
   <br />  <br />  <br />  <br />
    <Box sx={{flexGrow:1, width: "75vw",display: "flex", justifyContent: "center"}}>
       <Grid container spacing = {2}>
         <Grid Item container spacing = {2} xs={8}>

             {/*{console.log(Object.keys(sample_cart)}*/}
            <Stack>
             {Object.keys(sample_cart).map((book) => {
             return(
                 <><Item style={{width: "50vw"}}>
                    <Grid container spacing = {2} columns = {16} sx={{alignItems: "center"}}  >
                        <Grid item xs = {3}><img src = {sample_cart[book].img} width={64} alt={book+" by "+sample_cart[book].author} /></Grid>
                     {/*{console.log(book)}*/}
                        <Grid item xs = {3}>{book}</Grid>
                        <Grid item xs = {3}>{sample_cart[book].author}</Grid>
                        <Grid item xs = {4}><NumericInput min={1} value={sample_cart[book].count} onChange = {() => sample_cart[book].count+=1} /></Grid>
                     {/*{sample_cart[book].count}*/}
                        <Grid item xs = {3}>${sample_cart[book].count*Appraise(book)}</Grid>
                 </Grid>
                 </Item>
             </>)
            })}
            </Stack>
         </Grid>
        <Grid Item xs={4}>
            <Item>
                {/*{getSubtotal()}*/}
                <h2>Subtotal: ${subtotal}</h2>
                <h2>Shipping: $5</h2>
                <h2>Tax: ${(subtotal*.05).toFixed(2)}</h2>
                <h1>Total: ${(subtotal*1.05+5).toFixed(2)}</h1>
            </Item>
            <br />
            <Button variant="contained" onClick={() => getSubtotal()}>Check Out</Button>
        </Grid>
       </Grid>
    </Box>
  </div>
  );
}

export default Cart;

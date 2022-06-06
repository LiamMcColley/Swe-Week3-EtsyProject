import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Home(props) {
  return (
    <>
      {/* <Navbar setPage={"Home"}></Navbar> */}
      <br></br>
      <br></br>
      <br></br>
      <h1>This is the home page</h1>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {props.items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={props.items.indexOf(item)}>
            <Card sx={{ minWidth: 275, maxWidth: 345 }}>
              <CardMedia />
              <CardHeader title={item.title} />
              <CardContent>
                <Typography variant="body">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;

import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Carousel } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Home(props) {
  return (
    <>
      {/* <Navbar setPage={"Home"}></Navbar> */}
      <br></br>
      <br></br>
      <br></br>
    <div className="home--container">
      <div className="carousel--container">
        <Carousel className="carouselImage">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1633017596/course-covers/000/002/493/2493-original.jpg?1633017596"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1633017596/course-covers/000/002/493/2493-original.jpg?1633017596"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1633017596/course-covers/000/002/493/2493-original.jpg?1633017596"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Stack direction="row" spacing={2} className="avatar--container">
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Under $10</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Under $10</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Under $10</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Under $10</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Under $10</p>
        </div>
       
     </Stack>

      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
        className="grid--container"
      >
        {props.items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={props.items.indexOf(item)}>
            <Button>
              <Link to="/item">
                <Card sx={{ minWidth: 275, maxWidth: 345 }}>
                  <CardMedia />
                  <CardHeader title={item.title} />
                  <CardContent>
                    <Typography variant="body">{item.description}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
      </div>
    </>
  );
}

export default Home;

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
import { Carousel } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Home(props) {
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/store/subjects?subject=" + "love")
      .then((res) => res.json())
      //.then((data) => console.log(data))
      .then((data) => setBookList(data))
      .then(console.log(bookList));
    fetch(
      "http://localhost:9000/store/author?authorkey=" + "/authors/OL4327048A"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
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
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Stack direction="row" spacing={2} className="avatar--container">
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Under $10</p>
          </div>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Under $10</p>
          </div>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Under $10</p>
          </div>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Under $10</p>
          </div>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Under $10</p>
          </div>
        </Stack>

        <br></br>
        <br></br>

        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center"
          className="grid--container"
        >
          {bookList &&
            bookList.works.map((work) => (
              <Grid item xs={12} sm={3} key={bookList.works.indexOf(work)}>
                <Button>
                  <Link
                    to="/item"
                    state={{
                      title: work.title,
                      authors: work.authors[0].name,
                      coverId: work.cover_id,
                      bookId: work.key,
                    }}
                  >
                    <Card sx={{ minWidth: 275, maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="194"
                        image={
                          "https://covers.openlibrary.org/b/id/" +
                          work.cover_id +
                          "-L.jpg"
                        }
                        alt="Title"
                      />
                      <CardHeader title={work.title} />
                      <CardContent>
                        <Typography variant="body">
                          {work.authors[0].name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Button>
              </Grid>
            ))}
          {!bookList && <div>Loading...</div>}
        </Grid>
      </div>
    </>
  );
}

export default Home;

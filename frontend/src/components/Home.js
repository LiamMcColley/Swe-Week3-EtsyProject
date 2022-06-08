import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PaginationBasic from "./PaginationBasic";
import "../App.css";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(8);

  const indexOfLastBook = currentPage * bookPerPage;
  const indexOfFirstBook = indexOfLastBook - bookPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  useEffect(() => {
    getBooks("fiction");

    fetch(
      "http://localhost:9000/store/author?authorkey=" + "/authors/OL4327048A"
    ).then((res) => res.json());
    //.then((data) => console.log(data));
  }, []);

  const getBooks = (tag) => {
    fetch("http://localhost:9000/store/subjects?subject=" + tag)
      .then((res) => res.json())
      //.then((data) => console.log(data))
      .then((data) => setBooks(data.works));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="home--container">
        <div className="carousel--container">
          <Carousel className="carouselImage">
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
                height={500}
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
                src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
                height={500}
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
                src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
                height={500}
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
              onClick={() => getBooks("fiction")}
              className="avatar"
              alt="Remy Sharp"
              src="https://img.buzzfeed.com/buzzfeed-static/static/2020-05/15/23/asset/055e07cd8f2e/sub-buzz-3206-1589584307-17.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Fiction</p>
          </div>
          <div>
            <Avatar
              onClick={() => getBooks("love")}
              className="avatar"
              alt="Remy Sharp"
              src="https://images-na.ssl-images-amazon.com/images/I/61FR7FcEqEL.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Romance</p>
          </div>
          <div>
            <Avatar
              onClick={() => getBooks("drama")}
              className="avatar"
              alt="Remy Sharp"
              src="https://readersentertainment.com/wp-content/uploads/2012/09/Drama.png"
              sx={{ width: 100, height: 100 }}
            />
            <p>Drama</p>
          </div>
          <div>
            <Avatar
              onClick={() => getBooks("classic literature")}
              className="avatar"
              alt="Remy Sharp"
              src="https://static.onecms.io/wp-content/uploads/sites/23/2014/06/10/stack-of-classic-novels.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Classic Literature</p>
          </div>
          <div>
            <Avatar
              onClick={() => getBooks("adventure")}
              className="avatar"
              alt="Remy Sharp"
              src="https://damonza.com/wp-content/uploads/portfolio/fiction/torrent-15.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Adventure</p>
          </div>
        </Stack>

        <div className="card--container">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justify="center"
            className="grid--container"
          >
            {currentBooks.map((work) => (
              <Grid item xs={12} sm={6} md={3} key={currentBooks.indexOf(work)}>
                <Button>
                  <Link
                    to="/item"
                    state={{
                      title: work.title,
                      authors: work.authors[0].name,
                      coverId: work.cover_id,
                      bookId: work.key,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{ minWidth: 275, maxWidth: 345 }}
                      className="card"
                    >
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
                      <CardContent className="card--content">
                        <Typography variant="body">
                          {work.authors[0].name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Button>
              </Grid>
            ))}
          </Grid>

          <PaginationBasic
            bookPerPage={bookPerPage}
            totalBooks={books.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

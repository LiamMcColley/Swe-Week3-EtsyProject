import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PaginationBasic from "./PaginationBasic";
import CarouselBasic from "./Carousel";
import "../App.css";
import { PageContext } from "../contexts/pageContext";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material";

function Home() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(8);

  const { page, setPage } = useContext(PageContext);

  const { state } = useLocation();

  const indexOfLastBook = currentPage * bookPerPage;
  const indexOfFirstBook = indexOfLastBook - bookPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const getBooks = async (tag) => {
    await fetch("http://localhost:9000/store/subjects?subject=" + tag)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.works);
      });
  };

  useEffect(() => {
    setPage(window.location.href);
    if (state) getBooks(state.genre);
    else getBooks("fiction");
  }, [state, setPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Books a Trillion</title>
        </Helmet>
        <br></br>
        <br></br>
        <br></br>
        <div className="home--container">
          <div className="carousel--container">
            {books.length !== 0 && <CarouselBasic work={books} />}
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
                src="https://i.pinimg.com/564x/8c/27/50/8c27502941b45e7708ab7902ce67ff4a--ebook-cover-cover-art.jpg"
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
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={currentBooks.indexOf(work)}
                >
                  <Button>
                    <Link
                      to="/item"
                      state={{
                        title: work.title,
                        authors: work.authors[0].name,
                        coverId: work.cover_id,
                        bookId: work.key,
                        subject: work.subject[1],
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
      </ThemeProvider>
    </>
  );
}

export default Home;

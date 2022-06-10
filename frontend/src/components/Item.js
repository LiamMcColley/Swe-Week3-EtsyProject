import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
  ThemeProvider,
  Alert,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../contexts/cartContext";
import { PageContext } from "../contexts/pageContext";
import "../App.css";
import theme from "./theme.js";
import Appraise from "./appraiser";
import "../App.css";

function Item(props) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { page, setPage } = useContext(PageContext);

  const { state } = useLocation();
  const { title, authors, coverId, bookId, subject } = state;

  const [invoke, setInvoke] = useState();
  const [similarBooks, setSimilarBooks] = useState();
  const [bookDesc, setDesc] = useState();

  let cartEntry = {};

  if (cartItems) {
    cartEntry = JSON.parse(JSON.stringify(cartItems));
  }

  if (cartEntry[title]) {
    cartEntry[title].count = cartEntry[title].count + 1;
  } else {
    cartEntry[title] = {
      author: authors,
      img: "https://covers.openlibrary.org/b/id/" + coverId + "-M.jpg",
      count: 1,
    };
  }

  useEffect(() => {
    setPage(window.location.href);
    fetch(
      "http://localhost:9000/store/subjects5?subject=" + subject.toLowerCase()
    )
      .then((res) => res.json())
      .then((data) => setSimilarBooks(data));
    fetch("http://localhost:9000/store/book?key=" + bookId)
      .then((res) => res.json())
      .then((data) => setDesc(data));
  }, [bookId, invoke, setPage, subject]);

  const price = Appraise(title);

  const handleShoppingClick = () => {
    <Alert severity="success">Added To Cart</Alert>;
    setCartItems(cartEntry);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: "inherit",
            maxWidth: 1920,
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mx: 2,
              minHeight: 500,
              maxHeight: 500,
            }}
          >
            <Card>
              <CardMedia
                component="img"
                image={
                  "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
                }
                alt={title}
                sx={{ alignContent: "center", maxWidth: 500 }}
              />
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mx: 2,
              maxWidth: 500,
            }}
          >
            <Card>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                }}
              >
                <Typography component="div" variant="h5">
                  {title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {authors}
                </Typography>
                <br></br>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  {bookDesc && bookDesc.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mx: 2,
              maxHeight: 100,
            }}
          >
            <Card>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                aria-label="add to favorites"
                onClick={() => handleShoppingClick()}
              >
                Add to Cart
              </Button>
              <CardContent>
                <Typography variant="h6">Price: ${price}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box className="box">
          <Card>
            <CardContent>
              <Typography variant="h6" maxHeight={25}>
                Other Books from {subject}
              </Typography>
            </CardContent>
          </Card>
          {similarBooks &&
            similarBooks.works.map((work) => (
              <Button onClick={() => setInvoke(Math.random())}>
                <Link
                  to="/item"
                  state={{
                    title: work.title,
                    authors: work.authors[0].name,
                    coverId: work.cover_id,
                    bookId: work.key,
                    subject: bookDesc.subjects[1],
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{ minWidth: 275, maxWidth: 275, height: 400 }}
                    className="card"
                  >
                    <CardMedia
                      component="img"
                      height="200"
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
            ))}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Item;

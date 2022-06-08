import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  styled,
  Grid,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "react-bootstrap";
import { CartContext } from "../contexts/cartContext";

function Item(props) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { state } = useLocation();
  const { title, authors, coverId, bookId } = state;

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
    cartEntry[title] = { "author": authors, "img": "https://covers.openlibrary.org/b/id/" + coverId + "-M.jpg", count: 1 };

  }

  useEffect(() => {
    fetch("http://localhost:9000/store/subjects?subject=" + "love")
      .then((res) => res.json())
      .then((data) => setSimilarBooks(data));
    fetch("http://localhost:9000/store/book?key=" + bookId)
      .then((res) => res.json())
      .then((data) => setDesc(data));
  }, [invoke]);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleShoppingClick = () => {
    setCartItems(cartEntry);

    console.log(cartItems);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ alignContent: "center" }}>
            <CardHeader title={title} subheader={authors} />
            <CardMedia
              component="img"
              image={
                "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
              }
              alt={title}
              sx={{ alignContent: "center", maxWidth: 500 }}
            />
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleShoppingClick()}
              >
                <ShoppingCartIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent sx={{ maxWidth: 400 }}>
                <Typography>{bookDesc && bookDesc.description}</Typography>
              </CardContent>
              <CardContent>
                <Carousel variant="dark">
                  {similarBooks &&
                    similarBooks.works.map((work) => (
                      <Carousel.Item>
                        <Button onClick={() => setInvoke(Math.random())}>
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
                            <Card sx={{ minWidth: 275, maxWidth: 345 }}>
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
                      </Carousel.Item>
                    ))}
                </Carousel>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Item;

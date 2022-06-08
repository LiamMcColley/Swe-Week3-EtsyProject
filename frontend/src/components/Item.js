import React from "react";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  styled,
  Grid,
  Button,
  Link,
  FormLabel,
  FormControl,
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

  const [similarBooks, setSimilarBooks] = useState();
  const [bookDesc, setDesc] = useState();



  let cartEntry = {};
  cartEntry[title] = { "author": authors, "img": "https://covers.openlibrary.org/b/id/" + coverId + "-M.jpg", count: 1 };


  useEffect(() => {
    fetch("http://localhost:9000/store/subjects?subject=" + "love")
      .then((res) => res.json())
      .then((data) => setSimilarBooks(data));
    fetch("http://localhost:9000/store/book?key=" + bookId)
      .then((res) => res.json())
      .then((data) => setDesc(data.description))

    setCartItems(cartEntry);

  }, []);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


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
    console.log("clicked");
  };

  return (
    <>
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
              sx={{ alignContent: "center", maxWidth: 330 }}
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
              <CardContent sx={{ maxWidth: 300 }}>
                <Typography>{bookDesc && bookDesc}</Typography>
              </CardContent>
              <CardContent>
                <Carousel>
                  {similarBooks &&
                    similarBooks.works.map((work) => (
                      <Carousel.Item>
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

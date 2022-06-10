import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function CarouselBasic(props) {
  const randomIndex = Math.floor(Math.random() * 10 + 1);

  return (
    <div>
      <Carousel className="carouselImage">
        <Carousel.Item>
          <Link
            to="/item"
            state={{
              title: props.work[randomIndex].title,
              authors: props.work[randomIndex].authors[0].name,
              coverId: props.work[randomIndex].cover_id,
              bookId: props.work[randomIndex].key,
              subject: props.work[randomIndex].subject[1],
            }}
            style={{ textDecoration: "none" }}
          >
            <img
              className="d-block w-100 "
              src={
                "https://covers.openlibrary.org/b/id/" +
                props.work[randomIndex].cover_id +
                "-L.jpg"
              }
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{props.work[randomIndex].title}</h3>
              <p> {props.work[randomIndex].authors[0].name}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="/item"
            state={{
              title: props.work[randomIndex + 1].title,
              authors: props.work[randomIndex + 1].authors[0].name,
              coverId: props.work[randomIndex + 1].cover_id,
              bookId: props.work[randomIndex + 1].key,
              subject: props.work[randomIndex + 1].subject[1],
            }}
            style={{ textDecoration: "none" }}
          >
            <img
              className="d-block w-100 "
              src={
                "https://covers.openlibrary.org/b/id/" +
                props.work[randomIndex + 1].cover_id +
                "-L.jpg"
              }
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{props.work[randomIndex + 1].title}</h3>
              <p> {props.work[randomIndex + 1].authors[0].name}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="/item"
            state={{
              title: props.work[randomIndex + 2].title,
              authors: props.work[randomIndex + 2].authors[0].name,
              coverId: props.work[randomIndex + 2].cover_id,
              bookId: props.work[randomIndex + 2].key,
              subject: props.work[randomIndex + 2].subject[1],
            }}
            style={{ textDecoration: "none" }}
          >
            <img
              className="d-block w-100 "
              src={
                "https://covers.openlibrary.org/b/id/" +
                props.work[randomIndex + 2].cover_id +
                "-L.jpg"
              }
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{props.work[randomIndex + 2].title}</h3>
              <p>{props.work[randomIndex + 2].authors[0].name}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBasic;

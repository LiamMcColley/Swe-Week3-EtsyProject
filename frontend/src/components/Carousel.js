import React from 'react'
import { Carousel } from "react-bootstrap";
import "../App.css";

function CarouselBasic(props) {
  const randomIndex = Math.floor((Math.random() * 10) + 1);
  return (
    <div>
      <Carousel className="carouselImage">
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
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
            <p>
              {props.work[randomIndex + 2].authors[0].name}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default CarouselBasic

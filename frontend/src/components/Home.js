import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Cards from './Cards'
import PaginationBasic from './PaginationBasic'
import "../App.css";

function Home(props) {
  const [books,setBooks] = useState(props.items);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(8);

  const indexOfLastBook = currentPage * bookPerPage;
  const indexOfFirstBook = indexOfLastBook - bookPerPage;
  const currentBooks = books.slice(indexOfFirstBook,indexOfLastBook);

  const paginate=(pageNumber)=>setCurrentPage(pageNumber);


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
        <p>Fiction</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Romance</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Drama</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Classic Literature</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://i.etsystatic.com/26564732/r/il/94c82b/2978999220/il_300x300.2978999220_m8mh.jpg" sx={{ width: 100, height: 100 }}/>
        <p>Adventure</p>
        </div>
       
     </Stack>

      <div className="">
        <Cards items={currentBooks}/>
        <PaginationBasic bookPerPage={bookPerPage} totalBooks={books.length} paginate = {paginate}/>
     </div>
      
      </div>
    </>
  );
}

export default Home;

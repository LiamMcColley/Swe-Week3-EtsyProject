import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AccessTokenContext } from "../contexts/accessTokenContext";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  createTheme,
  ThemeProvider,
  Box,
  Card,
  Stack,
  Avatar,
  CardHeader,
} from "@mui/material";
import React from "react";
import { PageContext } from "../contexts/pageContext";

import theme from "./theme.js";

function Navbar(props) {
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    setPage(window.location.href);
  }, [page, setPage]);

  console.log(
    window.location.href.substring(
      window.location.href.length - 4,
      window.location.href.length
    )
  );

  return (
    <header>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 200 }}>
                    <Typography
                      variant="h6"
                      component="h1"
                      className="logo"
                      sx={{ flexGrow: 1 }}
                    >
                      Books A Trillion
                    </Typography>
                  </Card>
                </Link>
              </Box>

              {page && page.substring(page.length - 1) !== "/" ? (
                <Box sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={2}>
                    <Link
                      to="/"
                      state={{
                        genre: "fiction",
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card sx={{ maxWidth: 200 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              src="https://img.buzzfeed.com/buzzfeed-static/static/2020-05/15/23/asset/055e07cd8f2e/sub-buzz-3206-1589584307-17.jpg"
                              aria-label="Fiction"
                            />
                          }
                          title="Fiction"
                        />
                      </Card>
                    </Link>

                    <Link
                      to="/"
                      state={{
                        genre: "love",
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card sx={{ maxWidth: 200 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              src="https://images-na.ssl-images-amazon.com/images/I/61FR7FcEqEL.jpg"
                              aria-label="Romance"
                            />
                          }
                          title="Romance"
                        />
                      </Card>
                    </Link>
                    <Link
                      to="/"
                      state={{
                        genre: "drama",
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card sx={{ maxWidth: 200 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              src="https://readersentertainment.com/wp-content/uploads/2012/09/Drama.png"
                              aria-label="Drama"
                            />
                          }
                          title="Drama"
                        />
                      </Card>
                    </Link>
                    <Link
                      to="/"
                      state={{
                        genre: "classic literatures",
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card sx={{ maxWidth: 200 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              src="https://static.onecms.io/wp-content/uploads/sites/23/2014/06/10/stack-of-classic-novels.jpg"
                              aria-label="Classical Literature"
                            />
                          }
                          title="Classical Literature"
                        />
                      </Card>
                    </Link>
                    <Link
                      to="/"
                      state={{
                        genre: "adventure",
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card sx={{ maxWidth: 200 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              src="https://damonza.com/wp-content/uploads/portfolio/fiction/torrent-15.jpg"
                              aria-label="Adventure"
                            />
                          }
                          title="Adventure"
                        />
                      </Card>
                    </Link>
                  </Stack>
                </Box>
              ) : null}

              <Link to="/cart">
                <IconButton
                  size="large"
                  edge="start"
                  color="secondary"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        {/* <AppBar className="header" style={{ backgroundColor: "primary" }}>
          {displayDesktop()}
        </AppBar> */}
      </ThemeProvider>
      <FormControl>
        <Outlet />
      </FormControl>
    </header>
  );
}

export default Navbar;

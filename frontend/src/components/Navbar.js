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
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Card sx={{ maxWidth: 200 }}>
                      <Avatar
                        //onClick={() => getBooks("fiction")}
                        className="avatar"
                        alt="Remy Sharp"
                        src="https://img.buzzfeed.com/buzzfeed-static/static/2020-05/15/23/asset/055e07cd8f2e/sub-buzz-3206-1589584307-17.jpg"
                        sx={{ width: 50, height: 50 }}
                      />
                      <Typography
                        variant="h6"
                        component="h1"
                        className="logo"
                        sx={{ flexGrow: 1 }}
                      >
                        Fiction
                      </Typography>
                    </Card>
                  </Link>
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

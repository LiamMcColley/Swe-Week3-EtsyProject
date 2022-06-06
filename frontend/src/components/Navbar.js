import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AccessTokenContext } from "../contexts/accessTokenContext";
import FormControl from "@mui/material/FormControl";
import { Button, Typography, AppBar, Toolbar, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    selected: {
      main: '#1DB954',
      contrastText: '#fff',
    },
  },
});

const navbarData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Cart",
    href: "/cart",
  },

];

function Navbar(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const navigate = useNavigate();


  const displayDesktop = () => {
    return (
      <ThemeProvider theme={theme}>

        <Toolbar className="bar" color="neutral">
          {projectLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      </ThemeProvider>)
      ;
  };

  const getMenuButtons = () => {
    return navbarData.map(({ label, href }) => {
      if (label === label) { //THis is supposed to be props.setPage === label so that way it highlights which page you are on
        return (
          <ThemeProvider theme={theme}>
            <Link to={href}>
              <Button
                {...{
                  variant: "contained",
                  key: label,
                  color: "selected",
                  to: href,
                  component: Link,

                }}
              >
                {label}
              </Button>
            </Link>
          </ThemeProvider>
        );
      }
      return (
        <Link to={href}>

          <Button
            disabled={!accessToken}
            {...{

              key: label,
              color: "inherit",
              to: href,
              component: Link,

            }}
          >
            {label}
          </Button>
        </Link>
      );
    });
  };


  const projectLogo = (
    <Typography variant="h6" component="h1" className="logo">
      S-Message
    </Typography>
  );

  return (
    <header>
      <ThemeProvider theme={theme}>

        <AppBar className="header" style={{ backgroundColor: "black" }}>{displayDesktop()}</AppBar>

      </ThemeProvider>
      <FormControl>
        <Outlet />
      </FormControl>
    </header>
  );




}

export default Navbar;

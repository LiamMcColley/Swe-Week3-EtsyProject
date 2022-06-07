import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AccessTokenContext } from "../contexts/accessTokenContext";
import FormControl from "@mui/material/FormControl";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  createTheme,
  ThemeProvider,
  Box,
  Card,
} from "@mui/material";
import React from "react";

import theme from "./theme.js"




// const navbarData = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Cart",
//     href: "/cart",
//   },
// ];

function Navbar(props) {
  // const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  // const navigate = useNavigate();

  // const displayDesktop = () => {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Toolbar className="bar" color="neutral">
  //         {projectLogo}
  //         <div>{getMenuButtons()}</div>
  //       </Toolbar>
  //     </ThemeProvider>
  //   );
  // };

  // const getMenuButtons = () => {
  //   return navbarData.map(({ label, href }) => {
  //     if (label === label) {
  //       //THis is supposed to be props.setPage === label so that way it highlights which page you are on
  //       return (
  //         <ThemeProvider theme={theme}>
  //           <Button
  //             {...{
  //               variant: "contained",
  //               key: label,
  //               color: "secondary",
  //               to: href,
  //               component: Link,
  //             }}
  //           >
  //             {label}
  //           </Button>
  //         </ThemeProvider>
  //       );
  //     }
  //     return (
  //       <Button
  //         disabled={!accessToken}
  //         {...{
  //           key: label,
  //           color: "inherit",
  //           to: href,
  //           component: Link,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  // const projectLogo = (
  //   <Typography variant="h6" component="h1" className="logo">
  //     Books A Trillion
  //   </Typography>

  // );

  return (
    <header>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>

              <Box sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Card sx={{ maxWidth: 200 }}>
                    <Typography variant="h6" component="h1" className="logo" sx={{ flexGrow: 1 }}>
                      Books A Trillion
                    </Typography>
                  </Card>
                </Link>
              </Box>

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

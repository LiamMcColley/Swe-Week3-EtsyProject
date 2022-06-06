import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { AccessTokenContext } from "../contexts/accessTokenContext";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

function Navbar(props) {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <nav>
        <Button variant="contained">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </Button>
        <Button variant="contained">
          <Link to="/cart" style={linkStyle}>
            Cart
          </Link>
        </Button>
      </nav>
      <FormControl>
        <Outlet />
      </FormControl>
    </div>
  );
}

export default Navbar;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useCart } from "../../context/cart";

import "../../main.css";

const NavBar: React.FC = () => {
  const { numOfItems } = useCart();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1">
          <Link to="/">Image Gallery</Link>
        </Typography>

        <IconButton aria-label="cart" style={{ marginLeft: "auto" }}>
          <Badge badgeContent={numOfItems} color="secondary">
            <Link to="/cart">
              <ShoppingCartIcon style={{ color: "white" }} />
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

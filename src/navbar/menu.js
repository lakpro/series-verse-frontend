import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./../public/sv_logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <Box
        component="img"
        href="/"
        sx={{ display: { xs: "none", md: "flex" }, height: "50px" }}
        alt="Your logo."
        src={Logo}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          href=""
          sx={{ display: { xs: "flex", md: "none" }, height: "45px" }}
          alt="Your logo."
          src={Logo}
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        >
          <MenuItem>TOP</MenuItem>
        </Link>
        <Link
          to="/search"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        >
          <MenuItem>Search</MenuItem>
        </Link>
        <Link
          to="/favourites"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        >
          <MenuItem>Favourite</MenuItem>
        </Link>
      </Box>
    </>
  );
}

export default Menu;

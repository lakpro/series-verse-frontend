import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./../public/sv_logo.png";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favourites from "../favourites/favourites";
import Home from "../home/main";
import Search from "../search/search";
// import { Location } from "react-router-dom";
// import { use } from "../../../series-verse-backend/routes/seriesRouter";

function Menu() {
  const [bgcolor, setBgcolor] = React.useState("transparent");
  const [textcolor, setTextcolor] = React.useState("white");
  const [home, setHome] = React.useState(true);
  const [search, setSearch] = React.useState(false);
  const [favourites, setFavourites] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (value === 0) <Home />;
  //   else if (value === 1) <Search />;
  //   else if (value === 2) <Favourites />;
  // };

  return (
    <>
      <Link
        to="/home"
        style={{
          textDecoration: "none",
          // color: "white",
          // margin: "0 10px",
        }}
      >
        <Box
          component="img"
          // href="/home"
          sx={{ display: { xs: "none", md: "flex" }, height: "50px", mr: 5 }}
          alt="Your logo."
          src={Logo}
        />
      </Link>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
        }}
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        >
          <Box
            component="img"
            href=""
            sx={{ display: { xs: "flex", md: "none" }, height: "60px" }}
            alt="Your logo."
            src={Logo}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          // onClick={handleSubmit}
        >
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Tab value="one" label="HOME" />
          </Link>
          <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
            <Tab value="two" label="SEARCH" />
          </Link>
          <Link
            to="/favourites"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Tab value="three" label="FAVOURITES" />
          </Link>
        </Tabs>
        {/* <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        >
          <MenuItem
            onClick={handleHighlightTab}
            style={
              home
                ? { backgroundColor: "red", color: "black", fontWeight: "bold" }
                : { backgroundColor: "transparent", color: "white" }
            }
            sx={{
              "&:hover": {
                color: "#FF0000",
                // backgroundColor: {(Location.pathname) === "/home" ? "red" : ""}
              },
            }} 
          >
            HOME
          </MenuItem>
        </Link>
        <Link
          to="/search"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        >
          <MenuItem
            onClick={handleHighlightTab}
            style={
              search
                ? { backgroundColor: "red", color: "black", fontWeight: "bold" }
                : { backgroundColor: "transparent", color: "white" }
            }
            sx={{
              "&:hover": {
                color: "#FF0000",
                // backgroundColor: {(Location.pathname) === "/home" ? "red" : ""}
              },
            }}
          >
            Search
          </MenuItem>
        </Link>
        <Link
          to="/favourites"
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
        > */}
        {/* <MenuItem
            onClick={handleHighlightTab}
            style={
              favourites
                ? { backgroundColor: "red", color: "black", fontWeight: "bold" }
                : { backgroundColor: "transparent", color: "white" }
            }
            sx={{
              "&:hover": {
                color: "#FF0000",
                // backgroundColor: {(Location.pathname) === "/home" ? "red" : ""}
              },
            }}
          >
            Favourite
          </MenuItem>
        </Link> */}
      </Box>
    </>
  );
}

export default Menu;

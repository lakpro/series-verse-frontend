import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./../public/sv_logo.png";
import { Link } from "react-router-dom";
// import { Location } from "react-router-dom";
// import { use } from "../../../series-verse-backend/routes/seriesRouter";

function Menu() {
  const [bgcolor, setBgcolor] = React.useState("transparent");
  const [textcolor, setTextcolor] = React.useState("white");
  const [home, setHome] = React.useState(true);
  const [search, setSearch] = React.useState(false);
  const [favourites, setFavourites] = React.useState(false);

  function handleHighlightTab() {
    console.log(window.location.pathname);
    if (window.location.pathname === "home") {
      setHome(true);
      setSearch(false);
      setFavourites(false);
    } else if (window.location.pathname === "search") {
      setHome(false);
      setSearch(true);
      setFavourites(false);
    } else if (window.location.pathname === "favourites") {
      setHome(false);
      setSearch(false);
      setFavourites(true);
    }
  }

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
        <Link
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
        >
          <MenuItem
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
        </Link>
      </Box>
    </>
  );
}

export default Menu;

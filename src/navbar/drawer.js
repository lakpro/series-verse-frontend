import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";
import Logo from "./../public/sv_logo.png";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Icon } from "@mui/material";
import { useSelector } from "react-redux";

function DrawerMenu() {
  // search
  const pages = ["TOP", "Search", "Favourite"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const gid = useSelector((state) => state.user.gid);

  async function onSuccess(response) {
    // console.log("response", response);
    // const check = await login();
    // console.log("check", check);
    // if (check) {
    setIsLoggedIn(true);
    // useDispatch(login(

    // ));
    // }
  }

  // const gid = useSelector((state) => state.user.gid);

  React.useEffect(() => {
    if (gid) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn, gid]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const StyledSearch = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  //search as JSX
  const search = (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Suchen…"
        inputProps={{ "aria-label": "search" }}
      />
    </StyledSearch>
  );

  // drawer
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [openDrawer, setOpenDrawer] = React.useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (openDrawer) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setOpenDrawer(openDrawer);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* The outside of the drawer */}
      <Drawer
        //from which side the drawer slides in
        anchor="left"
        //if open is true --> drawer is shown
        open={openDrawer}
        //function that is called when the drawer should close
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
        onOpen={toggleDrawer(true)}
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            p: 2,
            height: 1,
            backgroundColor: "#121212",
            width: "50vw",
            maxWidth: "300px",
          }}
        >
          {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={toggleDrawer(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                // margin: "0 10px",
              }}
            >
              <ListItemButton>
                {/* <ListItemIcon>
                <ImageIcon sx={{ color: "primary.main" }} />
              </ListItemIcon> */}
                <ListItemText primary="HOME" />
              </ListItemButton>
            </Link>
            <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "white",
                // margin: "0 10px",
              }}
            >
              <ListItemButton>
                {/* <ListItemIcon>
                <DescriptionIcon sx={{ color: "primary.main" }} />
              </ListItemIcon> */}
                <ListItemText primary="Search" />
              </ListItemButton>
            </Link>

            <Link
              to="/favourites"
              style={{
                textDecoration: "none",
                color: "white",
                // margin: "0 10px",
              }}
            >
              <ListItemButton>
                {/* <ListItemIcon>
                <FolderIcon sx={{ color: "primary.main" }} />
              </ListItemIcon> */}
                <ListItemText primary="Favourite" />
              </ListItemButton>
            </Link>
            <ListItemButton>
              {!isLoggedIn ? (
                <Button
                  variant="contained"
                  color="primary"
                  href={process.env.REACT_APP_BACKEND_URL + "/api/auth/google"}
                  onClick={onSuccess}
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  Login{" "}
                  <Icon
                    component="img"
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    sx={{
                      fontSize: 20,
                      marginLeft: 1,
                    }}
                  />
                </Button>
              ) : (
                ""
              )}
            </ListItemButton>
          </Box>

          {/* {search} */}

          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          > */}
          {/* <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
              Register
            </Button>
            <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
              Login
            </Button> */}
          {/* </Box> */}
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerMenu;

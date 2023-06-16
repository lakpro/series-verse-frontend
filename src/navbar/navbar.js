import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { GoogleLogin } from "@react-oauth/google";

import AvatarMenu from "./avatar";
import DrawerMenu from "./drawer";
import Menu from "./menu";
import { Button, Icon } from "@mui/material";
import login from "./../components/login";
import { useSelector, useDispatch } from "react-redux";

function ResponsiveAppBar() {
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

  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DrawerMenu />
          <Menu />

          {!isLoggedIn ? (
            <Button
              variant="contained"
              color="primary"
              style={{
                marginLeft: "auto",
              }}
              href={process.env.REACT_APP_BACKEND_URL + "/api/auth/google"}
              onClick={onSuccess}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  backgroundColor: "transparent",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "lightblue",

                    color: "black",
                  },
                },
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
            <AvatarMenu />
          )}
          {/* {!isLoggedIn && <GoogleLogin onSuccess={onSuc} onError={onErr} />} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

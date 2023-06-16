import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { GoogleLogin } from "@react-oauth/google";

import AvatarMenu from "./avatar";
import DrawerMenu from "./drawer";
import Menu from "./menu";
import { Button } from "@mui/material";
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DrawerMenu />
          <Menu />
          {!isLoggedIn ? (
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "auto" }}
              href={process.env.REACT_APP_BACKEND_URL + "/api/auth/google"}
              onClick={onSuccess}
            >
              Login with Google
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

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
import { logInUser, logOutUser } from "../redux/userSlice";

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const gid = useSelector((state) => state.user.gid);

  const dispatch = useDispatch();

  const getStatus = async () => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/user");
// console.log("res", res);
    if (res) {
      const data = await res.json().catch((err) => {
    // console.log("err", err);
      });

  // console.log("dataStatus", data);

      if (data === undefined) return false;
      else return true;
    }
    return false;
  };
  const getProfile = async () => {
    const status = await getStatus();
// console.log("status", status);
    if (status) {
      return await fetch(process.env.REACT_APP_BACKEND_URL + "/api/user")
        .then((response) => response.json())
        .then((data) => {
      // console.log("profile", data);
      // console.log("profile", data.googleId);
          if (data !== undefined) {
            dispatch(
              logInUser({
                name: data.displayName,
                email: data.email,
                image: data.image,
                gid: data.googleId,
                login: true,
              })
            );
          } else {
            dispatch(
              logOutUser({
                name: "",
                email: "",
                image: "",
                gid: "",
                login: false,
              })
            );
          }
          return data;
        });
    }
  };

  const login = useSelector((state) => state.user.login);
  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const userImage = useSelector((state) => state.user.image);
  const userGid = useSelector((state) => state.user.gid);

  //   const userName = useSelector(userName);
  //   const userEmail = useSelector(userEmail);
  //   const userImage = useSelector(userImage);
  //   const userGid = useSelector(userGid);

  React.useEffect(() => {
    getProfile();
  }, []);

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
                  backgroundColor: "rgba(0, 0, 0, .7)",

                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(173,216,230, .7)",

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

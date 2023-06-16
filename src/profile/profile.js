// import SeriesList from "./seriesList";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logOutUser } from "../redux/userSlice";
import { Avatar, Container, Divider, Stack, Typography } from "@mui/material";
import Card from "./card";

function Profile() {
  const dispatch = useDispatch();
  const getProfile = async () => {
    return await fetch(process.env.REACT_APP_BACKEND_URL + "/api/user")
      .then((response) => response.json())
      .then((data) => {
        console.log("profile", data);
        console.log("profile", data.googleId);
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
    getProfile().then((p) => {
      p = p.data;
      console.log("p", p);
      // setData(d);
      // console.log("data", data);
      // return d;
    });
  }, []);

  return (
    <>
      {userGid ? (
        <div>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
              flexDirection: "column",
              mt: 6,
              fontWeight: "bold",
            }}
          >
            PROFILE
          </Typography>

          <Card
            name={userName}
            email={userEmail}
            image={userImage}
            gid={userGid}
          />
        </div>
      ) : (
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh",
            flexDirection: "column",
            mt: 6,
            fontWeight: "bold",
          }}
        >
          Please Login to view your profile
        </Typography>
      )}
    </>
  );
}

export default Profile;

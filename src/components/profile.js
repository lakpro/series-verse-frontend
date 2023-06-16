// import SeriesList from "./seriesList";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logOutUser } from "../redux/userSlice";

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
      <div>Profile Page </div>
      <div>Logged In: {userGid ? "yes" : "no"}</div>
      <div>Name: {userName}</div>
      <div>Email: {userEmail}</div>
      <div>Image: {userImage}</div>
      <div>Gid: {userGid}</div>
    </>
  );
}

export default Profile;

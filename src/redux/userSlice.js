import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  gid: null,
  name: "",
  email: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      // console.log("action.payload", action.payload);
      state.login = true;
      state.gid = action.payload.gid;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
    logOutUser: (state, action) => {
      state.login = false;
      state.gid = null;
      state.name = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;

export const userLogin = (state) => state.user.login;
export const userGid = (state) => state.user.gid;
export const userName = (state) => state.user.name;
export const userEmail = (state) => state.user.email;
export const userImage = (state) => state.user.image;

export default userSlice.reducer;

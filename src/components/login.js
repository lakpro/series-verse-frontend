// exports.login() = async (req, res) => {
//   return await fetch(
//     process.env.REACT_APP_BACKEND_URL + "/api/auth/check"
//   ).then(async (check) => {
//     if (!check)
//       res.redirect(process.env.REACT_APP_BACKEND_URL + "/api/auth/google");
//     else {
//       await fetch(process.env.REACT_APP_BACKEND_URL + "/dashboard").then(
//         (response) => {
//           res.send(response);
//         }
//       );
//     }
//   });
// };

import { dark } from "@mui/material/styles/createPalette";
import { redirect } from "react-router-dom";
// require("dotenv").config();

const login = async () => {
  return await fetch(process.env.REACT_APP_BACKEND_URL + "/api/auth/check", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    // credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(process.env.REACT_APP_BACKEND_URL + "/api/auth/check");
      console.log("data", data);
      console.log("data c", data.check);

      return data.check;

      //   .then(fetch(process.env.REACT_APP_BACKEND_URL + "/dashboard"))
      //   .then((response) => {
      //     console.log("response", response.json());
      //     // res.send(response);
      //     // return response;
      //   });
      //   } else {
      //     fetch(process.env.REACT_APP_BACKEND_URL + "/dashboard").then(
      //       (response) => {
      //         console.log("response", response.json());
      //         // res.send(response);
      //         return response;
      //       }
      //     );
      //   }
    });
};
//     async (check) => {
//     console.log("check", check.check);
//     if (!check) {
//       await fetch(process.env.REACT_APP_BACKEND_URL + "/api/auth/google")
//         .then(await fetch(process.env.REACT_APP_BACKEND_URL + "/dashboard"))
//         .then((response) => {
//           console.log("response", response.json());
//           // res.send(response);
//           return response;
//         });
//     } else {
//       await fetch(process.env.REACT_APP_BACKEND_URL + "/dashboard").then(
//         (response) => {
//           console.log("response", response);
//           // res.send(response);
//           return response;
//         }
//       );
//     }
//   });
// };

export default login;

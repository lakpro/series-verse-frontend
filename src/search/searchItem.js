import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Item(props) {
  //   const { sx, ...other } = props;
  const next = `/series/${props.id}`;
  // console.log(props.poster_path);

  if (props.poster_path === null) {
    return (
      <Box
        sx={{
          backgroundColor: "#afafaf",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: {
            xs: "175px",
            sm: "220px",
            md: "240px",
            lg: "260px",
          },
          height: { xs: "220px", sm: "260px", md: "300px", lg: "350px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          {props.title}
        </Typography>
      </Box>
    );
  }

  // return (
  //   <img
  //     src={props.poster_path}
  //     alt={props.title}
  //     style={{ width: "300px", height: "400px" }}
  //   />
  // );

  return (
    <Link to={next}>
      <Box
        component="img"
        sx={{
          // p: { xs: 0, sm: 1 },
          m: "5px",
          // mb: { xs: 1 },
          bgcolor: "grey.100",
          // borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          width: {
            xs: "175px",
            sm: "220px",
            md: "240px",
            lg: "260px",
          },
          height: { xs: "220px", sm: "260px", md: "300px", lg: "350px" },
          alignItems: "center",
          justifyContent: "center",
        }}
        alt={props.title}
        src={
          props.poster_path != null
            ? "https://image.tmdb.org/t/p/original" + props.poster_path
            : ""
        }
        //   onClick={() => {
        //     console.log(props.item);
        //     props.history.push("/series/" + props.id, props.item);
        //   }}
        //   {...other}
      />
    </Link>
  );
}

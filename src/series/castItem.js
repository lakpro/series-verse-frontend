import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Item(props) {
  //   const { sx, ...other } = props;
  const next = `/series/${props.id}`;
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
            xs: "150px",
            // sm: "220px",
            // md: "240px",
            // lg: "260px",
          },
          height: {
            xs: "180px",
            // sm: "260px",
            // md: "300px",
            // lg: "350px",
          },
          alignItems: "center",
          justifyContent: "center",
        }}
        alt="Series profile"
        src={"https://image.tmdb.org/t/p/original" + props.profile_path}
        //   onClick={() => {
        //     console.log(props.item);
        //     props.history.push("/series/" + props.id, props.item);
        //   }}
        //   {...other}
      />
    </Link>
  );
}

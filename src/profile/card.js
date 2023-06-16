import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 150,
          width: 150,
          display: "block",
          //   maxWidth: 400,
          overflow: "hidden",
          //   width: "100%",
          borderRadius: 50,
          position: "absolute",
          zIndex: 1,
          top: 250,
        }}
        alt="Profie Pic"
        src={props.image}
        // loading="lazy"
      />

      <Card
        sx={{
          width: "100%",
          maxWidth: 350,
          pt: 8,
          //   zIndex: "modal",
          position: "absolute",
          top: 350,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ m: 1.5 }} color="text.secondary">
            {/* <br /> */}
            {props.email}
          </Typography>
          <Typography variant="body2">Google ID : {props.gid}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// import SeriesList from "./seriesList";
import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Error() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          maxHeight: "100vh",
          flexDirection: "column",
          margin: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // alignItems: "space-between",
            width: "100%",
            maxWidth: "900px",
            height: "100%",
            maxHeight: "900px",
            m: "10px",
            p: { xs: 3, md: 5 },
            borderRadius: "30px",
            backgroundColor: "rgba(0, 0, 0, .7)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
              flexDirection: "column",
              // mt: 6,
              fontWeight: "bold",
              color: "white",
            }}
          >
            ERROR 404
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Error;

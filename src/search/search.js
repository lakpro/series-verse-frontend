import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", bgcolor: "background.paper", mt: "20px" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="ID" />
            <Tab label="NAME" />
          </Tabs>
        </Box>
        <Box
          sx={{
            width: "90vw",
            maxWidth: "900px",
            mt: "10px",
          }}
        >
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
      </div>
    </>
  );
}

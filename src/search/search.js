import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Item from "./searchItem";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  // let { criteria } = React.useParams();
  const [cards, setCards] = React.useState([]);
  // console.log("value", value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("search", search);
    if (value === 0) {
      await fetch(process.env.REACT_APP_BACKEND_URL + "/api/id/" + search)
        .then((response) => response.json())
        .then((d) => {
          d = d.data;
          console.log("d", d);
          setData(d);
          console.log("data", data);
          // return d;
        });
    } else {
      await fetch(process.env.REACT_APP_BACKEND_URL + "/api/search/" + search)
        .then((response) => response.json())
        .then((d) => {
          d = d.data.results;
          console.log("d", d);
          setData(d);
          console.log("data", data);
          // return d;
        });
    }
    console.log("data aft", data);
    // const cards = data.map((item) => {
    //   <Item
    //     key={item.id}
    //     poster_path={item.poster_path}
    //     title={item.name}
    //     id={item.id}
    //     item={item}
    //   />;
    // });
    // setCards(cards);
    // console.log(cards);
  };

  React.useEffect(() => {
    let crds;
    if (!data || data.length === 0) crds = "NOT FOUND";
    else {
      if (value === 0) {
        crds = (
          <Item
            key={data.id}
            poster_path={data.poster_path}
            title={data.name}
            id={data.id}
            item={data}
          />
        );
      } else {
        crds = data.map((item) => {
          // console.log("item.id", item.id);
          // console.log("item.name", item.name);
          return (
            <Item
              key={item.id}
              poster_path={item.poster_path}
              title={item.name}
              id={item.id}
              item={item}
            />
          );
        });
      }
    }
    setCards(crds);
    console.log("cards", cards);
    console.log("crds", crds);
  }, [data]);

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <Box sx={{ width: "100%", bgcolor: "background.paper", mt: "20px" }}>
         */}
      <div
        style={{
          width: "100%",
          // maxWidth: "1500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          marginTop: "100px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            pt: 2,
            pb: 5,
            bgcolor: "background.paper",
            width: "100%",
            maxWidth: "1500px",
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            boxShadow: " 0 0 50px 50px  #111",
          }}
          // style={{  box-shadow:  }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="ID" />
            <Tab value="two" label="NAME" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            pt: 2,
            pb: 5,
            bgcolor: "background.paper",
            width: "100%",
            maxWidth: "1500px",
            margin: "10px",

            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            boxShadow: " 0 0 50px 50px  #111",
          }}
        >
          <TextField
            fullWidth
            label="Search"
            // width="80vw"
            // maxWidth="500px"
            // margin="10px"
            id="search"
            value={search}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={handleSubmit}>
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {/* </div> */}
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
            flexDirection: "column",
          }}
        > */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            pt: 2,
            pb: 15,
            bgcolor: "background.paper",
            width: "100%",
            maxWidth: "1500px",
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            boxShadow: " 0 0 50px 50px #111",
          }}
          // style={{  box-shadow:  }}
        >
          {cards}
        </Box>
        {/* </div> */}
      </div>
    </>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Item from "./seriesItem";
import { Button } from "@mui/material";
// import Auth from "../profile/autheniticate";

const getInitialList = async (page) => {
  return await fetch(
    process.env.REACT_APP_BACKEND_URL + "/api/series/" + page
  ).then((response) => response.json());
};

export default function SeriesList() {
  const [data, setData] = React.useState([]);
  // let { criteria } = React.useParams();
  const [cards, setCards] = React.useState([]);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    // console.log(process.env.REACT_APP_BACKEND_URL + "/api/series");
    // const d = fetch(process.env.REACT_APP_BACKEND_URL + "/api/series")
    //   .then((response) => response.json())
    //   .then((d) => {
    //     setData(d);
    //     // console.log(data);
    //     return d;
    //   });
    // Auth().getProfile();

    getInitialList(page).then((d) => {
      d = d.data.results;
      // console.log("d", d);
      setData(d);
      // console.log("data", data);
      setPage(page + 1);
      // return d;
    });

    // const d = getInitialList();
    // console.log("d", d);
    // console.log("data", data);
    // console.log(await d);
    // cards = data.map((item) => {
    //   return (
    //     <Item
    //       key={item.id}
    //       poster_path={item.poster_path}
    //       title={item.title}
    //       id={item.id}
    //     />
    //   );
    // });
    // setCards(cards);
    // console.log(cards);
  }, []);

  React.useEffect(() => {
    if (data.length === 0) return;
    const cards = data.map((item) => {
      return (
        <Item
          key={item.id}
          poster_path={item.poster_path}
          title={item.title}
          id={item.id}
          item={item}
        />
      );
    });
    setCards(cards);
    // console.log("cards", cards);
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px",
        flexDirection: "column",
      }}
    >
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
          boxShadow: " 0 0 50px 50px #111",
        }}
        // style={{  box-shadow:  }}
      >
        {cards}
      </Box>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-50px",
          marginBottom: "50px",
          backgroundColor: "#ff1111",
          color: "#000",
          fontWeight: "bold",
          fontSize: "20px",
        }}
        onClick={() => {
          getInitialList(page).then((d) => {
            d = d.data.results;
            // console.log("d", d);
            setData(data.concat(d));
            // console.log("data", data);
            setPage(page + 1);
            // return d;
          });
        }}
      >
        Load More
      </Button>
    </div>
  );
}

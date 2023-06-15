import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Item from "./seriesItem";

const getInitialList = async () => {
  return await fetch(process.env.REACT_APP_BACKEND_URL + "/api/series").then(
    (response) => response.json()
  );
};

export default function SeriesList() {
  const [data, setData] = React.useState([]);
  // let { criteria } = React.useParams();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // console.log(process.env.REACT_APP_BACKEND_URL + "/api/series");
    // const d = fetch(process.env.REACT_APP_BACKEND_URL + "/api/series")
    //   .then((response) => response.json())
    //   .then((d) => {
    //     setData(d);
    //     // console.log(data);
    //     return d;
    //   });
    getInitialList().then((d) => {
      d = d.data.results;
      console.log("d", d);
      setData(d);
      console.log("data", data);
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
    console.log("cards", cards);
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          pt: 1,
          bgcolor: "background.paper",
          width: "100%",
          maxWidth: "1500px",
          borderRadius: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cards}
      </Box>
    </div>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Item from "./favouriteItem";
import { Typography } from "@mui/material";

export default function Favourites() {
  const getInitialList = async () => {
    let gid;
    await fetch(process.env.REACT_APP_BACKEND_URL + "/api/user")
      .then((response) => response.json())
      .then(async (data) => {
        console.log("profile", data);
        // console.log("profile", data.googleId);
        if (data !== undefined) {
          await fetch(
            process.env.REACT_APP_BACKEND_URL +
              "/api/favourite/get/" +
              data.googleId
          ).then((response) =>
            response.json().then((data) => {
              console.log("data", data);
              setData(data);

              const cards = data.map((item) => {
                console.log("item", item);
                return (
                  <Item
                    key={item.data.id}
                    poster_path={item.data.poster_path}
                    title={item.data.title}
                    id={item.data.id}
                    item={item.data}
                  />
                );
              });
              setCards(cards);
              console.log("cards", cards);

              return data;
            })
          );
        }
      });
  };

  const [data, setData] = React.useState([]);
  // let { criteria } = React.useParams();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    getInitialList().then((d) => {
      // d = d.data.results;
      console.log("d", d);
      setData(d);
      console.log("data", data);
      // return d;
    });
  }, []);

  React.useEffect(() => {
    if (!data || data.length === 0) return;
    const cards = data.map((item) => {
      console.log("item", item);
      return (
        <Item
          key={item.data.id}
          poster_path={item.data.poster_path}
          title={item.data.title}
          id={item.data.id}
          item={item.data}
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
        marginTop: "60px",
      }}
    >
      {console.log("cards", cards)}
      {cards != "" ? (
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
      ) : (
        <Typography
          variant="h4"
          style={{
            marginTop: "20px",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          NOTHING HERE YET !!
        </Typography>
      )}
    </div>
  );
}

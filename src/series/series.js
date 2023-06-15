import { useParams } from "react-router-dom";
import * as React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import CastItem from "./castItem";
import { styled } from "@mui/material/styles";
// import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: "5px",
  margin: "5px",
  color: "white",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "30px",
}));

function Series(props) {
  const { id } = useParams();
  const [data, setData] = React.useState([]);
  const [cast, setCast] = React.useState([]);
  const [genres, setGenres] = React.useState([]);


  const getInitialList = async () => {
    return await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/id/" + id
    ).then((response) => response.json());
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    getInitialList().then((d) => {
      d = d.data;
      console.log("d", d);
      setData(d);
      if (d == undefined) {
        navigate("/404", { replace: true });
      }
      console.log("data", data);
      if (data) {
        const creators = d.created_by.map((item) => {
          return (
            <CastItem
              key={item.id}
              profile_path={item.profile_path}
              title={item.name}
              id={item.id}
              item={item}
            />
          );
        });
        setCast(creators);
      }

      //   const genres = d.genres.map((item) => {
      //     return <Div>{item.name}</Div>;
      //   });
      //   setGenres(genres);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: "40px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          alt="Poster"
          component="img"
          href=""
          //   "https://image.tmdb.org/t/p/original" + props.poster_path
          src={
            data ? "https://image.tmdb.org/t/p/original" + data.poster_path : ""
          }
          sx={{
            maxWidth: "100%",
            // height: "40rem",
            width: {
              md: "500px",
            },
            maxHeight: {
              xs: "450px",
              md: "80vh",
            },
            bgcolor: "background.paper",
            mt: "20px",
            p: 2,
            borderRadius: "30px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // alignItems: "space-between",
            // width: "90vw",
            maxWidth: "900px",
            // height: "80vh",
            maxHeight: "100%",
            mt: "10px",
          }}
        >
          <Typography
            component="div"
            gutterBottom
            sx={{
              typography: {
                xs: "h3",
                lg: "h2",
              },
              fontWeight: {
                md: "520",
              },
            }}
          >
            {data ? data.name : ""}
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {genres}
          </Box> */}
          <Typography variant="h4" component="div" gutterBottom>
            {data ? data.tagline : ""}
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            {data ? data.overview : ""}
          </Typography>

          <br />

          <Typography
            variant="body1"
            component="div"
            gutterBottom
            sx={{
              fontWeight: "700",
            }}
          >
            Series Status : {data ? data.status : ""}
          </Typography>

          <Typography
            variant="body1"
            component="div"
            gutterBottom
            sx={{
              fontWeight: "700",
            }}
          >
            <div>
              {data
                ? data.last_episode_to_air
                  ? data.status == "Ended"
                    ? "Last Episode : " + data.last_episode_to_air.air_date
                    : ""
                  : ""
                : ""}
              {data
                ? data.next_episode_to_air
                  ? data.status != "Ended"
                    ? "Next Episode : " + data.next_episode_to_air.air_date
                    : ""
                  : ""
                : ""}
            </div>
          </Typography>

          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              mt: "20px",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                p: 1,
                mb: 2,
                width: {
                  xs: "100%",
                  md: "45%",
                },
              }}
            >
              Favourite 💖
            </Button>
            <Button
              variant="contained"
              sx={{
                p: 1,
                mb: 2,
                width: {
                  xs: "100%",
                  md: "45%",
                },
              }}
            >
              Mail Reminder 📅
            </Button>
          </Box>
          <Typography variant="h5" component="div" gutterBottom>
            CREATORS
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>{cast}</Box>
        </Box>
      </Box>
    </>
  );
}

export default Series;

// import { Provider, useSelector } from "react-redux";
import Navbar from "./navbar/navbar";
import SeriesList from "./home/seriesList";
import SlideShow from "./home/slideShow";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Search from "./search/search";
import Home from "./home/main";
import Series from "./series/series";
import Error from "./components/error";
import Profile from "./profile/profile";
import { Provider } from "react-redux";
import Store from "./redux/store";
import Favourites from "./favourites/favourites";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  // const store = configureStore();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fafafa",
      },
      secondary: {
        main: "#ff0000",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Provider store={Store}>
          <BrowserRouter>
            <Navbar />
            {/* <SlideShow /> */}
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="/search" element={<Search />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/series/:id" element={<Series />} />
              <Route path="/404" element={<Error />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
      {/* <SeriesList /> */}

      {/* <Navbar2 /> */}
      {/* <main>This app is using the dark mode</main> */}
    </>
  );
}

export default App;

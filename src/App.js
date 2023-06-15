import { useSelector } from "react-redux";
import Navbar1 from "./components/navbar1";
import SeriesList from "./home/seriesList";
import SlideShow from "./home/slideShow";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Search from "./search/search";
import Home from "./home/main";
import Series from "./series/series";
import Error from "./components/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        {/* <SlideShow /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/series/:id" element={<Series />} />
          <Route path="/404" element={<Error />} />
          {/* <Route path="/search/:criteria" element={<Search/>} /> */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
      {/* <SeriesList /> */}

      {/* <Navbar2 /> */}
      {/* <main>This app is using the dark mode</main> */}
    </>
  );
}

export default App;

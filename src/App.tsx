import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Films_list from "./components/Films_list";
import Header from "./components/Header";
import { films } from "./data";
import FilmDetails from "./components/FilmDetails";
import AddFilm from "./components/AddFilm";
import EditFilm from "./components/EditFilm";

function App() {
  useEffect(() => {
    const localStorageFilms = localStorage.getItem("films");

    if (localStorageFilms == null) {
      localStorage.setItem("films", JSON.stringify(films));
    }
  }, []);

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Films_list />} />
        <Route path="/film_details/:id" element={<FilmDetails />} />
        <Route path="/add_film" element={<AddFilm />} />
        <Route path="/edit_film/:id" element={<EditFilm />} />
      </Routes>
    </div>
  );
}

export default App;

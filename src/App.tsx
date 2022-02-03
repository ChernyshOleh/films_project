import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Films_list from "./components/Films_list";
import Header from "./components/Header";
import { films } from "./data";
import FilmDetails from "./components/FilmDetails";

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
        <Route
          path="/film_details/:id"
          element={<FilmDetails films={films} />}
        />
      </Routes>
    </div>
  );
}

export default App;

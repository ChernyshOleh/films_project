import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Films_list from "./components/Films_list";
import Header from "./components/Header";
import { films } from "./data";
import FilmDetails from "./components/FilmDetails";
import AddFilm from "./components/AddFilm";
import EditFilm from "./components/EditFilm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

function App() {
  useEffect(() => {
    const localStorageFilms = localStorage.getItem("films");

    if (localStorageFilms == null) {
      localStorage.setItem("films", JSON.stringify(films));
    }
  }, []);

  const { login, logout, token } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ login, logout, token, isAuthenticated }}>
      <div className="main">
        <Header />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Films_list />} />
            <Route path="/film_details/:id" element={<FilmDetails />} />
            <Route path="/add_film" element={<AddFilm />} />
            <Route path="/edit_film/:id" element={<EditFilm />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Films_list />} />
            <Route path="/film_details/:id" element={<FilmDetails />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;

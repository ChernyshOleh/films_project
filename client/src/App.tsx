import { Route, Routes } from "react-router-dom";
import "./App.css";
import Films_list from "./components/Films_list";
import Header from "./components/Header";
import FilmDetails from "./components/FilmDetails";
import AddFilm from "./components/AddFilm";
import EditFilm from "./components/EditFilm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { login, logout, token, isAdmin } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        isAuthenticated,
        isAdmin,
      }}
    >
      <div className="main">
        <Header />
        <Routes>
          <Route path="/add_film" element={<AddFilm />} />
          <Route path="/edit_film/:id" element={<EditFilm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Films_list />} />
          <Route path="/film_details/:id" element={<FilmDetails />} />{" "}
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Films_list from "./components/Films_list";
import Header from "./components/Header";
import FilmDetails from "./components/FilmDetails";
import AddFilm from "./components/AddFilm";
import EditFilm from "./components/EditFilm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/user/userSlice";

function App() {
  // const { login, logout, token, isAdmin } = useAuth();
  // const isAuthenticated = !!token;
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData && userData.token) {
      dispatch(loginUser(userData));
    }
  }, []);

  return (
    // <AuthContext.Provider
    //   value={{
    //     login,
    //     logout,
    //     token,
    //     isAuthenticated,
    //     isAdmin,
    //   }}
    // >
    <div className="main">
      <Header />
      <Routes>
        <Route path="/add_film" element={<AddFilm />} />
        <Route path="/edit_film/:id" element={<EditFilm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Films_list />} />
        <Route path="/film_details/:id" element={<FilmDetails />} />
      </Routes>
    </div>
    // </AuthContext.Provider>
  );
}

export default App;

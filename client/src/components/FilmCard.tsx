import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Films.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/storeTypes";
import { useAppDispatch } from "../store/store";
import { delFilm } from "../store/films/filmsSlice";
import { Film } from "../types";

interface Props {
  film: Film;
}

export default function FilmCard({ film }: Props) {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  return (
    <div className={styles.film}>
      <img
        src={film.img}
        alt={film.title}
        className={styles.poster}
        onClick={() => navigate(`/film_details/${film._id}`)}
      />
      <div className={styles.title}>{film.title}</div>
      <div className={styles.director}>Directed by {film.director}</div>
      {user.isAdmin && (
        <div className={styles.btns}>
          <Link to={`/edit_film/${film._id}`}>
            <button className={styles.editBtn}>edit</button>
          </Link>
          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(delFilm(film._id))}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}

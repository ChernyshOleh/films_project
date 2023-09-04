import { Alert } from "@mantine/core";
import FilmCard from "./FilmCard";
import { useEffect } from "react";
import styles from "../styles/Films.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/storeTypes";
import { useAppDispatch } from "../store/store";
import { fetchFilms } from "../store/films/filmsSlice";

export default function Films_list() {
  const films = useSelector((state: RootState) => state.films.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <>
      {films.length === 0 ? (
        <Alert title="Oops!" color="red">
          No films in database yet
        </Alert>
      ) : (
        <div className={styles.grid}>
          {films.map((film) => (
            <FilmCard film={film} key={film._id} />
          ))}
        </div>
      )}
    </>
  );
}

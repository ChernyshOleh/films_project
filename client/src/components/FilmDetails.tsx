import { Film } from "../types";
import { useParams } from "react-router-dom";
import styles from "../styles/FilmDetails.module.css";
import { getFilm } from "../filmsService";
import { useEffect, useState } from "react";

export default function FilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film>(Object);
  useEffect(() => {
    async function fetchData() {
      setFilm(await getFilm(Number(id)));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.img} src={film.img} alt={film.title} />
      <div className={styles.details}>
        <h1 className={styles.title}>{film.title}</h1>
        <p className={styles.year}>Year: {film.year}</p>
        <p className={styles.director}>Director: {film.director}</p>
        <p className={styles.duration}>Duration: {film.duration} min.</p>
        <p className={styles.description}>{film.description}</p>
      </div>
    </div>
  );
}

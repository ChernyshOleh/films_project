import { Film } from "../types";
import { useParams } from "react-router-dom";
import { Group, Image } from "@mantine/core";
import styles from "../styles/FilmDetails.module.css";

export default function FilmDetails() {
  const { id } = useParams();
  const films = JSON.parse(localStorage.getItem("films") || "[]");
  const film = films.find((item: Film) => item._id == id);

  return (
    <div className={styles.filmDetailsStyles}>
      <div>
        <Image className={styles.imgStyles} src={film.img} />
      </div>
      <div>
        <Group direction="column">
          <h2>{film.title}</h2>
          <p>by {film.director}</p>
          <p>Duration: {film.duration} minutes</p>
          <p>Description: {film.description}</p>
          <p>Price: {film.price}</p>
        </Group>
      </div>
    </div>
  );
}

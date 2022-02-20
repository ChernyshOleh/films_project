import { Alert, Grid } from "@mantine/core";
import FilmCard from "./FilmCard";
import { Film } from "../types";
import { useEffect, useState } from "react";
import { getFilms } from "../filmsService";
import { deleteFilm } from "../filmsService";

export default function Films_list() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getFilms();
      setFilms(data);
    }
    fetchData();
  }, [setFilms]);

  function removeFilm(id: any) {
    deleteFilm(id);
    const updatedFilms = films.filter((film) => film._id !== Number(id));
    setFilms(updatedFilms);
  }

  return (
    <>
      {films.length === 0 ? (
        <Alert title="Oops!" color="red">
          No films in database yet
        </Alert>
      ) : (
        <Grid justify="space-around">
          {films.map((item) => (
            <FilmCard film={item} key={item._id} removeFilm={removeFilm} />
          ))}
        </Grid>
      )}
    </>
  );
}

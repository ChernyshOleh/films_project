import { Alert, Grid } from "@mantine/core";
import FilmCard from "./FilmCard";
import { Film } from "../types";
import { useState } from "react";

export default function Films_list() {
  const [films, setFilms] = useState<Film[]>(
    JSON.parse(localStorage.getItem("films") || "[]")
  );

  function deleteFilm(id: any) {
    setFilms(films.filter((item) => item._id !== id));
    const localStorageFilms = JSON.parse(localStorage.getItem("films") || "[]");
    const filteredFilms = JSON.stringify(
      localStorageFilms.filter((item: { _id: any }) => item._id !== id)
    );
    localStorage.setItem("films", filteredFilms);
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
            <FilmCard film={item} key={item._id} deleteFilm={deleteFilm} />
          ))}
        </Grid>
      )}
    </>
  );
}

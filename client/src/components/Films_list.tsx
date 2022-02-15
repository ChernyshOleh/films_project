import { Alert, Grid } from "@mantine/core";
import FilmCard from "./FilmCard";
import { Film } from "../types";
import { useEffect, useState } from "react";
import { getFilms } from "../filmsService";

export default function Films_list() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getFilms();
      setFilms(data);
    }
    fetchData();
  }, [setFilms]);

  return (
    <>
      {films.length === 0 ? (
        <Alert title="Oops!" color="red">
          No films in database yet
        </Alert>
      ) : (
        <Grid justify="space-around">
          {films.map((item) => (
            <FilmCard film={item} key={item._id} deleteFilm={() => {}} />
          ))}
        </Grid>
      )}
    </>
  );
}

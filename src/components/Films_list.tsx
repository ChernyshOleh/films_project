import { Alert, Grid } from "@mantine/core";
import FilmCard from "./FilmCard";
import { Film } from "../types";
import { useState } from "react";

export default function Films_list() {
  const [films, setFilms] = useState<Film[]>(
    JSON.parse(localStorage.getItem("films") || "[]")
  );

  return (
    <>
      {films.length === 0 ? (
        <Alert title="Oops!" color="red">
          No films in database yet
        </Alert>
      ) : (
        <Grid justify="space-around">
          {films.map((item) => (
            <FilmCard film={item} key={item._id} />
          ))}
        </Grid>
      )}
    </>
  );
}

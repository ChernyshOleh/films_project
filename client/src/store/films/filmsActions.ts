import { Film } from "../../types";

export const SET_FILMS = "SET_FILMS";
export const DELETE_FILM = "DELETE_FILM";

export const setFilms = (films: Film[]) =>
  ({
    type: SET_FILMS,
    payload: films,
  } as const);

export const delFilm = (id: number) =>
  ({
    type: DELETE_FILM,
    payload: { filmId: id },
  } as const);

type SetFilmsAction = ReturnType<typeof setFilms>;
type DelFilmAction = ReturnType<typeof delFilm>;

export type FilmsActions = SetFilmsAction | DelFilmAction;

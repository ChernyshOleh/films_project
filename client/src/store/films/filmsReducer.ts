import { DELETE_FILM, FilmsActions, SET_FILMS } from "./filmsActions";
import { FilmsState, RootState } from "../storeTypes";

let initialState: FilmsState = {
  films: [],
};

export function filmsReducer(state = initialState, action: FilmsActions) {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film._id !== action.payload.filmId),
      };
    default:
      return state;
  }
}

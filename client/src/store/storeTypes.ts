import { CurrentUser, Film } from "../types";

export interface FilmsState {
  films: Film[];
}

export interface UserState {
  user: CurrentUser;
}

export interface RootState {
  films: FilmsState;
  user: UserState;
}

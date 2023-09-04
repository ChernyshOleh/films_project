import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms, deleteFilm } from "../../filmsService";

export interface FilmsState {
  films: Film[];
}

const initialState: FilmsState = {
  films: [],
};

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async () => await getFilms()
);

export const delFilm = createAsyncThunk(
  "films/deleteFilm",
  async (id: number) => {
    await deleteFilm(id);
    return id;
  }
);

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    // setFilms: (state, action: PayloadAction<Film[]>) => {
    //   state.films = action.payload;
    // },
    // deleteFilm: (state, action: PayloadAction<number>) => {
    //   state.films = state.films.filter((film) => film._id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFilms.fulfilled,
      (state, action: PayloadAction<Film[]>) => {
        state.films = action.payload;
      }
    );

    builder.addCase(
      delFilm.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.films = state.films.filter((film) => film._id !== action.payload);
      }
    );
  },
});

export const {} = filmsSlice.actions;

export default filmsSlice.reducer;

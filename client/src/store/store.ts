import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./films/filmsSlice";
import userReducer from "./user/userSlice";
// import { userReducer } from "./user/userReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

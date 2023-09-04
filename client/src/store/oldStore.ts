import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { filmsReducer } from "./films/filmsReducer";
import { userReducer } from "./user/userReducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  films: filmsReducer,
  user: userReducer,
});

export const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

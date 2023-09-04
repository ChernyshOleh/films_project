import { FilmsState, UserState } from "../storeTypes";
import { LOGIN, LOGOUT, UserActions } from "./userActions";

let initialState: UserState = {
  user: {
    username: "",
    email: "",
    isAdmin: false,
    token: "",
  },
};

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          username: action.payload.username,
          email: action.payload.email,
          isAdmin: action.payload.isAdmin,
          token: action.payload.token,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: { ...initialState.user },
      };
    default:
      return state;
  }
}

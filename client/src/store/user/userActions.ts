import { CurrentUser } from "../../types";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = (payload: CurrentUser) =>
  ({
    type: LOGIN,
    payload,
  } as const);

export const logoutUser = () =>
  ({
    type: LOGOUT,
  } as const);

export type LoginUserAction = ReturnType<typeof loginUser>;
export type LogoutUserAction = ReturnType<typeof logoutUser>;
export type UserActions = LoginUserAction | LogoutUserAction;

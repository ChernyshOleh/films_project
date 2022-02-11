import { createContext } from "react";

export const AuthContext = createContext<{
  login: (userToken: number, admin: boolean) => void;
  logout: () => void;
  token: any;
  isAuthenticated: boolean;
  isAdmin: boolean;
}>({
  login: () => {},
  logout: () => {},
  token: null,
  isAuthenticated: false,
  isAdmin: false,
});

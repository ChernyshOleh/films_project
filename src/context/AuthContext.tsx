import { createContext } from "react";

export const AuthContext = createContext<{
  login: (userToken: number) => void;
  logout: () => void;
  token: any;
  isAuthenticated: boolean;
}>({
  login: () => {},
  logout: () => {},
  token: null,
  isAuthenticated: false,
});

import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback((userToken, admin) => {
    setIsAdmin(admin);
    setToken(userToken);
    localStorage.setItem(
      "userData",
      JSON.stringify({ token: userToken, admin: admin })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setIsAdmin(false);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "[]");

    if (data && data.token) {
      login(data.token, data.admin);
    }
  }, [login]);

  return { login, logout, token, isAdmin };
};

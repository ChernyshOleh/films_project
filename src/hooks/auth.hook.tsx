import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((userToken) => {
    setToken(userToken);
    localStorage.setItem("userToken", JSON.stringify({ token: userToken }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("userToken");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userToken") || "[]");

    if (data && data.token) {
      login(data.token);
    }
  }, [login]);

  return { login, logout, token };
};

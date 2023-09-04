import { useCallback, useEffect, useState } from "react";
import { getFilms } from "../filmsService";
import { Film } from "../types";

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const fetchData = useCallback(async () => {
    setFilms(await getFilms());
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { fetchData, films };
};

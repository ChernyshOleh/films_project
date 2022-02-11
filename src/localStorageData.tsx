export const localStorageFilms = JSON.parse(
  localStorage.getItem("films") || "[]"
);
export const localStorageUsers = JSON.parse(
  localStorage.getItem("users") || "[]"
);

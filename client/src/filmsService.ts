import axios from "axios";
import { Film } from "./types";

const url = "http://localhost:8000";

export async function getFilms() {
  const response = await axios.get<Film[]>(`${url}/films`);
  return response.data;
}

export async function getFilm(id: any) {
  const response = await axios.get<Film>(`${url}/films/${id}`);
  return response.data;
}

export async function addFilm(newFilm: Film) {
  await axios.post<Film>(`${url}/films`, newFilm);
}

export async function editFilm(id: any, newFilm: Film) {
  await axios.put<Film>(`${url}/films/${id}`, newFilm);
}

export async function deleteFilm(id: any) {
  await axios.delete<Film>(`${url}/films/${id}`);
}

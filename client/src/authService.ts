import axios from "axios";

const url = "http://localhost:8000";

export async function login(email: string, password: string) {
  const response = await axios.post(`${url}/login`, { email, password });
  const userData = response.data;
  return userData;
}

export async function register(user: unknown) {
  await axios.post(`${url}/users`, user);
}

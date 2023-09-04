export interface Film {
  _id: number;
  title: string;
  year: string;
  director: string;
  duration: number;
  img: string;
  description: string;
}

export interface CurrentUser {
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

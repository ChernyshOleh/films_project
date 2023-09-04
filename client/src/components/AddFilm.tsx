import { Alert, Button, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "../styles/Form.module.css";
import { addFilm } from "../filmsService";
import { Film } from "../types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/storeTypes";

export default function AddFilm() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  const [form, setForm] = useState<Film>({
    _id: Date.now(),
    title: "",
    year: "",
    director: "",
    duration: 0,
    img: "",
    description: "",
  });

  function handleChange(e: any) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }
  if (user.isAdmin) {
    return (
      <div className={styles.forms_bg}>
        <form className={styles.form_position}>
          <TextInput
            name="title"
            label="Title"
            onChange={(e) => handleChange(e)}
            value={form.title}
          />
          <TextInput
            name="year"
            label="Year"
            onChange={(e) => handleChange(e)}
            value={form.year}
          />
          <TextInput
            name="director"
            label="Director"
            onChange={(e) => handleChange(e)}
            value={form.director}
          />
          <TextInput
            name="duration"
            label="Duration"
            type="number"
            onChange={(e) => handleChange(e)}
            value={form.duration}
          />
          <TextInput
            name="img"
            label="Img"
            onChange={(e) => handleChange(e)}
            value={form.img}
          />
          <Textarea
            name="description"
            label="Description"
            onChange={(e) => handleChange(e)}
            value={form.description}
          />
        </form>
        <div className={styles.btn}>
          <Button
            color="teal"
            size="lg"
            onClick={async () => {
              await addFilm(form);
              navigate("/");
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    );
  } else
    return (
      <Alert title="Oops!" color="red">
        You are not admin
      </Alert>
    );
}

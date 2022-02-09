import { Film } from "../types";
import { Link, useParams } from "react-router-dom";
import { Button, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function EditFilm() {
  const { id } = useParams();
  const films = JSON.parse(localStorage.getItem("films") || "[]");
  let film = films.find((item: Film) => item._id == id);
  const [form, setForm] = useState(film);

  function handleChange(e: any) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function edit() {
    films[films.indexOf(film)] = form;
    localStorage.setItem("films", JSON.stringify(films));
  }

  return (
    <div className={styles.forms_bg}>
      <form className={styles.form_position}>
        <TextInput
          name="title"
          label="Title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          name="director"
          label="Director"
          value={form.director}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          name="duration"
          label="Duration"
          type="number"
          value={form.duration}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          name="price"
          label="Price"
          type="number"
          value={form.price}
          onChange={(e) => handleChange(e)}
        />
        <TextInput
          name="img"
          label="Img"
          value={form.img}
          onChange={(e) => handleChange(e)}
        />
        <Textarea
          name="description"
          label="Description"
          value={form.description}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className={styles.btn}>
        <Button color="teal" size="lg" onClick={edit} component={Link} to={"/"}>
          Apply
        </Button>
      </div>
    </div>
  );
}

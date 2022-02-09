import { Button, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Form.module.css";

export default function AddFilm() {
  const [form, setForm] = useState({
    _id: Date.now(),
    title: "",
    director: "",
    duration: "",
    price: "",
    img: "",
    featured: false,
    description: "",
  });

  function sendData() {
    const ls = JSON.parse(localStorage.getItem("films") || "[]");

    localStorage.setItem("films", JSON.stringify([...ls, form]));
  }

  function handleChange(e: any) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }

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
          name="price"
          label="Price"
          type="number"
          onChange={(e) => handleChange(e)}
          value={form.price}
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
          onClick={sendData}
          component={Link}
          to={"/"}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

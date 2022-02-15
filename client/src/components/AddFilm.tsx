import { Alert, Button, Textarea, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import styles from "../styles/Form.module.css";
import { addFilm } from "../filmsService";
import { Film } from "../types";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function AddFilm() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [form, setForm] = useState<Film>({
    _id: Date.now(),
    title: "",
    director: "",
    duration: 0,
    price: 0,
    img: "",
    featured: false,
    description: "",
  });

  function handleChange(e: any) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }
  if (auth.isAdmin) {
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
            onClick={async () => {
              await addFilm(form);
              navigate("/");
            }}
            // component={Link}
            // to={"/"}
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

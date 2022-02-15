import { Film } from "../types";
import { useParams } from "react-router-dom";
import { Alert, Button, Textarea, TextInput } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/Form.module.css";
import { editFilm, getFilm } from "../filmsService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function EditFilm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  let [form, setForm] = useState<Film>(Object);
  useEffect(() => {
    async function fetchData() {
      const data = await getFilm(id);
      setForm(data);
    }
    fetchData();
  }, [setForm]);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (auth.isAdmin) {
    return (
      <div className={styles.forms_bg}>
        <form className={styles.form_position}>
          <TextInput
            name="title"
            label="Title"
            defaultValue={form.title}
            onChange={(e) => handleChange(e)}
          />
          <TextInput
            name="director"
            label="Director"
            defaultValue={form.director}
            onChange={(e) => handleChange(e)}
          />
          <TextInput
            name="duration"
            label="Duration"
            type="number"
            defaultValue={form.duration}
            onChange={(e) => handleChange(e)}
          />
          <TextInput
            name="price"
            label="Price"
            type="number"
            defaultValue={form.price}
            onChange={(e) => handleChange(e)}
          />
          <TextInput
            name="img"
            label="Img"
            defaultValue={form.img}
            onChange={(e) => handleChange(e)}
          />
          <Textarea
            name="description"
            label="Description"
            defaultValue={form.description}
            onChange={(e) => handleChange(e)}
          />
        </form>
        <div className={styles.btn}>
          <Button
            color="teal"
            size="lg"
            onClick={async () => {
              await editFilm(id, form);
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

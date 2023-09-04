import { Film } from "../types";
import { useParams } from "react-router-dom";
import { Alert, Button, Textarea, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "../styles/Form.module.css";
import { editFilm, getFilm } from "../filmsService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/storeTypes";

export default function EditFilm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  let [form, setForm] = useState<Film>(Object);
  useEffect(() => {
    async function fetchData() {
      const data = await getFilm(Number(id));
      setForm(data);
    }
    fetchData();
  }, [setForm]);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (user.isAdmin) {
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
            name="year"
            label="Year"
            defaultValue={form.year}
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
              await editFilm(Number(id), form);
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

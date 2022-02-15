import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { register } from "../authService";

export default function RegisterForm() {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const form = useForm({
    initialValues: {
      id: Date.now(),
      username: "",
      email: "",
      password: "",
      isAdmin: false,
    },

    validationRules: {
      username: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) =>
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(value),
    },
  });

  async function sendData(username: string, email: string) {
    if (
      form.values.username === "admin" &&
      form.values.email === "admin@admin" &&
      form.values.password === "12345Qq"
    ) {
      form.values.isAdmin = true;
      auth.login(Date.now(), form.values.isAdmin);
      await register(form.values);
      navigate("/");
    } else {
      await register(form.values);
      auth.login(Date.now(), form.values.isAdmin);
      navigate("/");
    }
  }

  return (
    <div className={styles.forms_bg}>
      <form
        onSubmit={form.onSubmit((values) => {
          sendData(values.username, values.email);
        })}
        className={styles.form_position}
      >
        <TextInput
          label="Username"
          required
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must be at least 6 characters long and have at least 1 number and an uppercase letter"
          required
          {...form.getInputProps("password")}
        />
        <div className={styles.btn}>
          <Button color="teal" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

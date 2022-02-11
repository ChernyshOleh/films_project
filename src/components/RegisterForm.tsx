import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { localStorageUsers } from "../localStorageData";

export default function RegisterForm() {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      isAdmin: false,
    },

    validationRules: {
      username: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
    },
  });

  function sendData(username: string, email: string) {
    if (
      localStorageUsers.find(
        (item: { username: string }) => item.username === username
      )
    ) {
      alert(`Username: ${username} already in use`);
    } else if (
      localStorageUsers.find((item: { email: string }) => item.email === email)
    ) {
      alert(`Email: ${email} already in use`);
      //For admin
    } else if (
      form.values.username === "admin" &&
      form.values.email === "admin@admin" &&
      form.values.password === "12345q"
    ) {
      form.values.isAdmin = true;
      auth.login(Date.now(), form.values.isAdmin);
      localStorage.setItem(
        "users",
        JSON.stringify([...localStorageUsers, form.values])
      );
      navigate("/");
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([...localStorageUsers, form.values])
      );
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
          description="Password must include at least one letter, number and special character"
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

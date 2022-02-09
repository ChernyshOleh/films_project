import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function RegisterForm() {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const ls = JSON.parse(localStorage.getItem("users") || "[]");
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationRules: {
      username: (value) => value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
    },
  });

  function sendData(username: string, email: string) {
    if (ls.find((item: { username: string }) => item.username === username)) {
      alert(`Username: ${username} already in use`);
    } else if (ls.find((item: { email: string }) => item.email === email)) {
      alert(`Email: ${email} already in use`);
    } else {
      localStorage.setItem("users", JSON.stringify([...ls, form.values]));
      auth.login(Date.now());
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

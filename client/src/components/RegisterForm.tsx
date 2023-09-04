import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { register } from "../authService";

export default function RegisterForm() {
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

  async function sendData() {
    if (form.values.username.includes("admin")) {
      form.values.isAdmin = true;
      await register(form.values);
      navigate("/login");
    } else {
      await register(form.values);
      navigate("/login");
    }
  }

  return (
    <div className={styles.forms_bg}>
      <form
        onSubmit={form.onSubmit(() => {
          sendData();
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
          <Button color="dark" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

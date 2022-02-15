import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../authService";

export default function LoginForm() {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function loginHandler() {
    const userData = await login(form.email, form.password);
    auth.login(userData.token, userData.isAdmin);
    navigate("/");
  }

  return (
    <div className={styles.forms_bg}>
      <form className={styles.form_position}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          required
          name="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.btn}>
          <Button color="teal" onClick={loginHandler}>
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}

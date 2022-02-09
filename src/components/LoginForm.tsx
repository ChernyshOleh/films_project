import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginHandler() {
    let user = users.find(
      (item: { email: string }) => item.email === form.email
    );
    if (user && user.password === form.password) {
      auth.login(Date.now());
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
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

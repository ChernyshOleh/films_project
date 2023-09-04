import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../authService";
import { useDispatch } from "react-redux";
import { CurrentUser } from "../types";
import { loginUser } from "../store/user/userSlice";

export default function LoginForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
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
    if (userData.token) {
      dispatch(loginUser(userData));
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    } else {
      alert(userData.message);
    }
  }

  return (
    <div className={styles.forms_bg}>
      <form className={styles.form_position}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          name="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.btn}>
          <Button color="dark" onClick={loginHandler}>
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}

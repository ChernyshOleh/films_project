import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const btn_styles: any = {
  variant: "filled",
  color: "teal",
  radius: "xl",
  size: "md",
};

const header_styles = {
  marginBottom: "20px",
  padding: "20px",
  borderBottom: "2px solid white",
};

export default function Header() {
  const auth = useContext(AuthContext);

  if (auth.isAuthenticated) {
    return (
      <Group style={header_styles} spacing="xl">
        <Button {...btn_styles} component={Link} to={"/"}>
          Home
        </Button>
        <Button {...btn_styles} component={Link} to={"/add_film"}>
          Add new film
        </Button>
        <Button {...btn_styles} component={Link} to={"/"} onClick={auth.logout}>
          Log out
        </Button>
      </Group>
    );
  }
  return (
    <Group style={header_styles} spacing="xl">
      <Button {...btn_styles} component={Link} to={"/"}>
        Home
      </Button>
      <Button {...btn_styles} component={Link} to={"/login"}>
        Log in
      </Button>
      <Button {...btn_styles} component={Link} to={"/register"}>
        Register
      </Button>
    </Group>
  );
}

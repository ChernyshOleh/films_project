import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

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
  return (
    <Group style={header_styles} spacing="xl">
      <Link to={"/"}>
        <Button {...btn_styles}>Home</Button>
      </Link>
      <Link to={"/add_film"}>
        <Button {...btn_styles}>Add new film</Button>
      </Link>
    </Group>
  );
}

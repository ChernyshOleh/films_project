import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/storeTypes";
import styles from "../styles/Header.module.css";
import { logoutUser } from "../store/user/userSlice";

const btn_styles: any = {
  variant: "filled",
  color: "dark",
  // radius: "xl",
  size: "md",
};

const header_styles = {
  marginBottom: "20px",
  paddingTop: "20px",
  paddingBottom: "20px",
  borderBottom: "2px solid black",
};

export default function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  return (
    <>
      <Group style={header_styles} spacing="xl" position="center">
        <Button {...btn_styles} component={Link} to={"/"} uppercase>
          Home
        </Button>
        {user.isAdmin && (
          <Button {...btn_styles} component={Link} to={"/add_film"} uppercase>
            Add new film
          </Button>
        )}
        {!user.token && (
          <>
            <Button {...btn_styles} component={Link} to={"/login"} uppercase>
              Log in
            </Button>
            <Button {...btn_styles} component={Link} to={"/register"} uppercase>
              Register
            </Button>
          </>
        )}
        {user.token && (
          <Button
            {...btn_styles}
            component={Link}
            to={"/"}
            onClick={() => {
              localStorage.removeItem("userData");
              dispatch(logoutUser());
            }}
            uppercase
          >
            Log out
          </Button>
        )}
        {user.token && <div>{user.username.toUpperCase()}</div>}
      </Group>
    </>
  );
}

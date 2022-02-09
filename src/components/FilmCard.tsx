import { Card, Image, Text, Button, Group, Grid } from "@mantine/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function FilmCard({ film, deleteFilm }: any) {
  const auth = useContext(AuthContext);
  if (auth.isAuthenticated) {
    return (
      <Grid.Col span={1}>
        <Card>
          <Card.Section>
            <Link to={`/film_details/${film._id}`}>
              <Image src={film.img} />
            </Link>
          </Card.Section>
          <Group style={{ marginBottom: 5 }}>
            <Text weight={800}>{film.title}</Text>
          </Group>
          <Text>by {film.director}</Text>
          <Group style={{ marginTop: "10px" }} grow>
            <Button
              variant="filled"
              color="teal"
              radius="xs"
              component={Link}
              to={`/edit_film/${film._id}`}
            >
              Edit
            </Button>

            <Button
              variant="filled"
              color="pink"
              radius="xs"
              onClick={() => deleteFilm(film._id)}
            >
              Delete
            </Button>
          </Group>
        </Card>
      </Grid.Col>
    );
  }
  return (
    <Grid.Col span={1}>
      <Card>
        <Card.Section>
          <Link to={`/film_details/${film._id}`}>
            <Image src={film.img} />
          </Link>
        </Card.Section>
        <Group style={{ marginBottom: 5 }}>
          <Text weight={800}>{film.title}</Text>
        </Group>
        <Text>by {film.director}</Text>
      </Card>
    </Grid.Col>
  );
}

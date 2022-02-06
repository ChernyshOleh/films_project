import { Card, Image, Text, Button, Group, Grid } from "@mantine/core";
import { Link } from "react-router-dom";

export default function FilmCard({ film, deleteFilm }: any) {
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
        <Group style={{ marginTop: "10px" }} spacing="xl">
          <Link to={`/edit_film/${film._id}`}>
            <Button variant="filled" color="teal" radius="xs">
              Edit
            </Button>
          </Link>

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

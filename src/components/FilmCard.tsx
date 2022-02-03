import { Card, Image, Text, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function FilmCard({ film }: any) {
  return (
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
      <Group position="center" grow style={{ marginTop: "10px" }}>
        <Button variant="filled" color="teal" radius="xs">
          Edit
        </Button>
        <Button variant="filled" color="pink" radius="xs">
          Delete
        </Button>
      </Group>
    </Card>
  );
}

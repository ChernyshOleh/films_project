import { Film } from "../types";
import { useParams } from "react-router-dom";
import { Group, Image } from "@mantine/core";

interface FilmDetailsProps {
  films: Film[];
}

const filmDetailsStyles = {
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "white",
  display: "flex",
  borderRadius: "10px",
};

const imgStyles = {
  width: "300px",
  margin: "20px",
};

export default function FilmDetails({ films }: FilmDetailsProps) {
  const { id } = useParams();
  const film = films.find((item) => item._id == id);

  return (
    <div style={filmDetailsStyles}>
      <div>
        <Image style={imgStyles} src={film?.img} />
      </div>
      <div>
        <Group direction="column">
          <h2>{film?.title}</h2>
          <p>by {film?.director}</p>
          <p>Duration: {film?.duration} minutes</p>
          <p>Description: {film?.description}</p>
          <p>Price: {film?.price}</p>
        </Group>
      </div>
    </div>
  );
}

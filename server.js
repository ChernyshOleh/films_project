import express from "express";
import cors from "cors";
import { Low, JSONFile } from "lowdb";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/films", async (req, res) => {
  await db.read();
  res.json(db.data.films);
});

app.get("/films/:id", async (req, res) => {
  await db.read();
  res.json(db.data.films.find((film) => film._id === Number(req.params.id)));
});

app.post("/films", async (req, res) => {
  await db.read();
  db.data.films.push(req.body);
  await db.write();
  res.status(201).send("ok");
});

app.put("/films/:id", async (req, res) => {
  await db.read();
  const editIndex = db.data.films.findIndex(
    (film) => film._id === Number(req.params.id)
  );
  db.data.films[editIndex] = req.body;
  await db.write();
  res.status(200).send();
});

app.delete("/films/:id", async (req, res) => {
  await db.read();
  const removeIndex = db.data.films.findIndex(
    (film) => film._id === Number(req.params.id)
  );
  db.data.films.splice(removeIndex, 1);
  await db.write();
  res.status(200).send();
});

app.get("/users", async (req, res) => {
  await db.read();
  res.json(db.data.users);
});

app.post("/users", async (req, res) => {
  await db.read();
  db.data.users.push(req.body);
  await db.write();
  res.status(201).send("ok");
});

app.post("/login", async (req, res) => {
  await db.read();
  const user = db.data.users.find((item) => item.email === req.body.email);
  if (!user) {
    res.json({ message: "Email not found" });
  } else if (user && user.password !== req.body.password) {
    res.json({ message: "Wrong password" });
  } else {
    var token = jwt.sign({ id: user.id }, "shhhhh");
    res.json({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  }
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});

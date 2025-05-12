//POST GET PUT DELETE
// CRUD - CREATE READ UPDATE DELETE

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
//app.use(express.json());

app.get("/", (request, response) => {
  response.send("Ola Mundo");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});

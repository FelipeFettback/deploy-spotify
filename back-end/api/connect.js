import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Felipe:Beatriz2@cluster0.fqnlrrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);

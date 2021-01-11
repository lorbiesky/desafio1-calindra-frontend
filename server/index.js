import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import consign from "consign";
import bodyparser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

dotenv.config();

consign().then("./apis").then("./routes").into(app);

app.listen(process.env.APP_PORT, () => {
  console.log("Server running...");
});

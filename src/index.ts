import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import yahtzeeController from "./yahtzee/yahtzee.controller";
import YahtzeeRepository from "./yahtzee/yahtzee.repository";
import YahtzeeService from "./yahtzee/yahtzee.service";
import Yahtzee from "./yahtzee/yahtzee";
import dotenv from "dotenv"; // Import dotenv
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 3000;
const dburi = process.env.MONGODB_URI || "mongodb://localhost:27017/";

const yahtzeeRepository = new YahtzeeRepository();
const yhatzee = new Yahtzee();
const yahtzeeService = new YahtzeeService(yahtzeeRepository, yhatzee);
const yhatzeeController = new yahtzeeController(yahtzeeService);

app.use(cors());
app.use(express.json());

mongoose
  .connect(dburi)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// app.get("/yahtzee", yhatzeeController.getScoreByGame);
app.post("/yahtzee", yhatzeeController.createScore);
app.patch("/yahtzee");

app.listen(port, () => {
  console.log(`[Serverr]: server is running at http://localhost:${port}`);
});

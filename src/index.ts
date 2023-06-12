import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Nhiệt liệt chào mừng quý vị đại coder!</h1>");
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));


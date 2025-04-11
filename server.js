import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import gptRouter from "./routes/gpt.js";

dotenv.config();
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(cors());
app.use(limiter);
app.use(express.json());

app.use("/gpt", gptRouter);

app.get("/", (req, res) => {
  res.send("GPT API is running.");
});

const PORT = process.env.port || 8899;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

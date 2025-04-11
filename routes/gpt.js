import express from "express";
import dotenv from "dotenv";
import gptRoute from "./routes/gpt.js";

dotenv.config(); // Load biến môi trường từ .env

const app = express();
const port = 8899;

// Middleware để parse JSON nếu bạn muốn nhận dữ liệu dạng JSON (tùy API bạn thiết kế)
app.use(express.json());

app.use("/", gptRoute);

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});

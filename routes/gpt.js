import express from "express";
import { askGPT } from "../lib/gpt/gpt.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const text = req.query.text;
  if (!text) {
    return res.status(400).json({ success: false, message: "Missing 'text' query." });
  }

  const reply = await askGPT(text);
  res.json({ success: true, reply });
});

export default router;

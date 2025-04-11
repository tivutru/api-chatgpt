import express from "express";
import { askGPT } from "../lib/gpt/gpt.js";

const router = express.Router();

router.get("/chatgpt", async (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: "Missing text query" });

  try {
    const reply = await askGPT(text);
    res.json({ success: true, reply });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

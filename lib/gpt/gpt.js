// lib/gpt/gpt.js
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:8899",
    "X-Title": "My GPT API"
  }
});

export async function askGPT(message) {
  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ]
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("OpenRouter error:", error);
    return "Đã xảy ra lỗi khi gọi GPT API.";
  }
}

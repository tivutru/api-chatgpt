import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:8899",
    "X-Title": "ChatGPT API Bot"
  }
});

export async function askGPT(prompt) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "openai/gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 512 // 👈 giới hạn nhỏ để không bị từ chối
    });
    

    console.log("===> GPT response:", JSON.stringify(chatCompletion, null, 2));

    if (
      chatCompletion &&
      chatCompletion.choices &&
      chatCompletion.choices.length > 0 &&
      chatCompletion.choices[0].message
    ) {
      return chatCompletion.choices[0].message.content.trim();
    } else {
      throw new Error("No choices returned from GPT");
    }
  } catch (err) {
    console.error("❌ GPT error:", err);
    throw new Error(err.message || "Unknown GPT error");
  }
}

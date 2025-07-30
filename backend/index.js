const express = require("express");
require("dotenv").config();
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // for parsing application/json

app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  })
); // Apply rate limiting to all requests

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
}); // Initialize the GoogleGenAI client

app.post("/api/podcast/script/generate", async (req, res) => {
  const { topic } = req.body;
  console.log(topic);

  if (!topic) {
    return res.status(400).json({ error: "Topic is required" });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate a podcast script about ${topic}. The script should be engaging, informative, and suitable for a general audience. Include an introduction, main points, and a conclusion. Aim for a duration of approximately 30 minutes when spoken aloud.`,
    });

    console.log("Generated script:\n", response.text);

    return res.status(200).json({ response: response.text });
  } catch (error) {
    console.error("Error generating script:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

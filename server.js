import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

const gemini_api_key = process.env.GEMINI_API_KEY;

if (!gemini_api_key) {
  console.error("GEMINI_API_KEY is not set in .env file");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(gemini_api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Received prompt:", prompt);
    
    const result = await model.generateContent(prompt);
    console.log("Raw Gemini response:", result);

    // Get the text from the response
    const responseText = result.response.candidates[0].content.parts[0].text;
    console.log("Extracted text:", responseText);

    if (!responseText) {
      throw new Error("No text received from Gemini");
    }

    res.json({ result: responseText });
  } catch (error) {
    console.error("Detailed error:", error);
    res.status(500).json({ 
      error: "Error processing your request",
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Gemini API Key present:", !!gemini_api_key);
});
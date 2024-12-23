import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body; 
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
      ],
      store: true, 
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error querying OpenAI:", error.message);
    res.status(500).send("Error processing your request.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

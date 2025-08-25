"Plan a 2-day trip to Coorg with a budget of ₹5000 and preferences: waterfalls, coffee plantations."
// backend/routes/zeroShotRoute.js
import express from "express";
import OpenAI from "openai";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/zero-shot-plan", async (req, res) => {
  const { destination, budget, duration, preferences } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert trip planner."
        },
        {
          role: "user",
          content: `Plan a ${duration} trip to ${destination} under ${budget}. Include activities based on: ${preferences}.`
        }
      ],
      temperature: 0.7
    });

    res.json({ itinerary: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Zero-shot trip planning failed" });
  }
});

export default router;

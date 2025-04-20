import express from 'express';
import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

//  Replace these with more roles  as per need
const staticQuestions = {
  "software engineer": [
    "Tell me about a challenging project you worked on.",
    "How do you keep your skills up to date?",
    "Describe a time when you had to debug a complex issue.",
    "How do you prioritize tasks in a sprint?",
    "Why do you want to be a software engineer?"
  ],
  "product manager": [
    "How do you handle conflicting stakeholder priorities?",
    "Tell me about a product you’re proud of.",
    "What’s your process for validating a new idea?",
    "Describe a time you failed and what you learned.",
    "How do you define product success?"
  ]
};

// This route will return static questions
router.get("/hr-questions", (req, res) => {
  const { role } = req.query;

  if (!role) {
    return res.status(400).json({ error: "Role is required" });
  }

  const questions = staticQuestions[role.toLowerCase()] || [
    "Tell me about yourself.",
    "Why are you interested in this role?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in 5 years?",
    "Describe a time you worked in a team."
  ];

  res.status(200).json({ questions });
});

export default router;
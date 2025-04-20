import express from 'express';
import Interview from '../models/Interview.js';

const router = express.Router();

// Get all interviews
router.get('/', async (req, res) => {
  const interviews = await Interview.find();
  res.json(interviews);
});

// Add a new interview
router.post('/', async (req, res) => {
  try {
    const newInterview = new Interview(req.body);
    const saved = await newInterview.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

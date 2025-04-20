import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const testSchema = new mongoose.Schema({
  message: String,
});
const TestModel = mongoose.model("Test", testSchema);

router.get("/test-db", async (req, res) => {
  try {
    const newTest = new TestModel({ message: "MongoDB is working!" });
    await newTest.save();
    res.status(200).send("✅ MongoDB test document saved successfully!");
  } catch (err) {
    res.status(500).send("❌ Error saving to MongoDB: " + err.message);
  }
});

export default router;

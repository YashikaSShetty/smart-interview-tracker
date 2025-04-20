// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import testRoute from "./routes/test.js";
import interviewRoutes from './routes/interviewRoutes.js'; 
import questionRoutes from './routes/questionRoutes.js'; 
import roleRoutes from './routes/roles.js'; // Import the roles routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Sample Route (Test)
app.get('/', (req, res) => {
  res.send('🚀 Smart Interview Tracker Backend is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🟢 Server is running on http://localhost:${PORT}`);
});

app.use("/", testRoute);
app.use('/api/interviews', interviewRoutes);
app.use("/api/questions", questionRoutes);
// app.use("/api/ai", aiRoutes);
app.use('/api/roles', roleRoutes); // Use the role routes

import mongoose from 'mongoose'

const interviewSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ['Applied', 'Interviewing', 'Awaiting Response', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: {
    type: Date,
    default: Date.now
  },
  location:String,
  workType: {
    type: String,
    enum: ['Remote', 'Hybrid', 'On-site'],
    default: 'Remote'
  },
   interviewDate: Date,
   package: String,
   interviewRounds: [String],
   notes: String
})
export default mongoose.model('Interview', interviewSchema)
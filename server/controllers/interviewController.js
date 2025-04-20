import Interview from "../models/Interview";
export const createJob = async (req, res) => {
  const { company, role, status, appliedDate, location, workType, interviewDate, package: jobPackage, interviewRounds, notes } = req.body;

  try {
    const newJob = new Interview({
      company,
      role,
      status,
      appliedDate,
      location,
      workType,
      interviewDate,
      package: jobPackage,
      interviewRounds,
      notes
    });

    await newJob.save();
    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
}
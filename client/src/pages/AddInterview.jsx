
import React, { useState } from "react";
import axios from "axios";

const AddInterview = () => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: new Date().toISOString().split("T")[0],
    location: "",
    workType: "Remote",
    interviewDate: "",
    package: "",
    interviewRounds: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // convert rounds from comma-separated string to array
      const payload = {
        ...formData,
        interviewRounds: formData.interviewRounds.split(",").map((s) => s.trim()),
      };
      await axios.post("http://localhost:5000/api/interviews", payload);
      alert("Interview added successfully!");
    } catch (err) {
      alert("Error adding interview. Check required fields.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Interview</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="company" placeholder="Company*" onChange={handleChange} required className="p-2 border rounded" />
        <input name="role" placeholder="Role*" onChange={handleChange} required className="p-2 border rounded" />
        <input name="location" placeholder="Location" onChange={handleChange} className="p-2 border rounded" />
        <input name="interviewDate" type="date" onChange={handleChange} className="p-2 border rounded" />
        <input name="appliedDate" type="date" onChange={handleChange} value={formData.appliedDate} className="p-2 border rounded" />

        <select name="status" onChange={handleChange} className="p-2 border rounded">
          {["Applied", "Interviewing", "Awaiting Response", "Offer", "Rejected"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select name="workType" onChange={handleChange} className="p-2 border rounded">
          {["Remote", "Hybrid", "On-site"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input name="package" placeholder="Package (e.g., ₹10 LPA)" onChange={handleChange} className="p-2 border rounded" />
        <input name="interviewRounds" placeholder="Interview Rounds (comma-separated)" onChange={handleChange} className="p-2 border rounded" />
        <textarea name="notes" placeholder="Notes" onChange={handleChange} className="p-2 border rounded" />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AddInterview;
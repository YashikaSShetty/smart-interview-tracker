import React, { useEffect, useState } from "react";
import axios from "axios";
import InterviewCard from "../components/InterviewCard";

const Dashboard = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/interviews`)
      .then((res) => setInterviews(res.data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Interviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interviews.map((item) => (
          <InterviewCard key={item._id} interview={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import InterviewCard from "../components/InterviewCard";

const Dashboard = () => {
// eslint-disable-next-line no-unused-vars
const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/interviews`)
      .then((res) => setInterviews(res.data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="container dashboard-container p-6">
      <h1 className="text-3xl font-bold mb-4">Your Interviews</h1>
      <div className="flex flex-wrap gap-6">
        {interviews.map((item) => (
          <div key={item._id} className="card w-full md:w-5/12">
            <InterviewCard interview={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
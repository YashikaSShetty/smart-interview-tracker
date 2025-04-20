import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const Resources = () => {
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState([]);
  const [questions, setQuestions] = useState([]);

  // Fetch roles from the backend
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/roles`); // Replace with your correct API URL
        setRoles(response.data.roles);
      } catch (err) {
        toast.error("Failed to fetch roles");
      }
    };
    
    fetchRoles();
  }, []);

  // Fetch questions based on the selected role
  const fetchQuestions = async () => {
    if (!role) {
      toast.error("Please select a role to fetch questions.");
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/questions/hr-questions?role=${role.toLowerCase()}`);
      setQuestions(response.data.questions);
    } catch (err) {
      toast.error("Failed to fetch questions");
    }
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold'>HR Interview Questions</h1>
      <label className='text-lg font-semibold'>Select a role to fetch questions:</label>
      <select
        className="text-lg font-semibold"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select a role</option>
        {roles.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>

      <button
        className="bg-blue-500 text-white p-2 mt-4 rounded"
        onClick={fetchQuestions}
      >
        Fetch Questions
      </button>

      <div className="mt-6">
        {questions.length > 0 && (
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Resources;

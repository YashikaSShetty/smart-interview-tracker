// tracker.jsx
import React, { useState } from 'react';

const Tracker = () => {
  const [interviews, setInterviews] = useState([
    { company: 'Company A', date: '2025-04-20', status: 'Pending' },
    { company: 'Company B', date: '2025-04-22', status: 'Completed' },
  ]);

  return (
    <div className="tracker p-4">
      <h2 className="text-xl font-bold mb-4">Interview Tracker</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Company</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview, index) => (
            <tr key={index}>
              <td className="border p-2">{interview.company}</td>
              <td className="border p-2">{interview.date}</td>
              <td className="border p-2">{interview.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracker;


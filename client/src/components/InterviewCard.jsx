import React from "react";

const InterviewCard = ({ interview }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-semibold">{interview.role} at {interview.company}</h3>
      <p className="text-sm text-gray-600">{interview.location} | {interview.workType}</p>
      <p className="text-sm">Status: {interview.status}</p>
      <p className="text-sm">Date: {new Date(interview.interviewDate).toDateString()}</p>
      {interview.notes && <p className="text-sm italic mt-2">{interview.notes}</p>}
    </div>
  );
};

export default InterviewCard;

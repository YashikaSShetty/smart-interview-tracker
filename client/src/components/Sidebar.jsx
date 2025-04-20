import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 p-4">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add">Add Interview</Link>
        </li>
        <li>
          <Link to="/tracker">Tracker</Link> {/* Add this for your tracker page */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
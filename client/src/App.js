//eslint-disable
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddInterview from "./pages/AddInterview";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link to="/" className="mr-4">Dashboard</Link>
        <Link to="/add">Add Interview</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddInterview />} />
      </Routes>
    </Router>
  );
}

export default App;

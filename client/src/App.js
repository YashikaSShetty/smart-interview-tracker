// //eslint-disable
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddInterview from './pages/AddInterview';
import Tracker from './pages/Tracker';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-blue-50 text-gray-800">
        <aside className="w-64 bg-pink-600 text-white flex flex-col shadow-xl">
          <div className="text-lg font-semibold p-4 border-b border-pink-500">Smart Interview Tracker</div>
          <nav className="flex flex-col flex-grow p-4 space-y-2">
            <Link to="/" className="px-3 py-2 rounded transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">🏠 Dashboard</Link>
            <Link to="/add" className="px-3 py-2 rounded transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500">➕ Add Interview</Link>
            <Link to="/tracker" className="px-3 py-2 rounded transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-300 hover:bg-pink-600">🗂️ Tracker</Link>
            <Link to="/resources" className="px-3 py-2 rounded transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-200 hover:bg-pink-700">🧠 HR Questions</Link>
          </nav>
        </aside>
        <main className="flex-grow p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddInterview />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
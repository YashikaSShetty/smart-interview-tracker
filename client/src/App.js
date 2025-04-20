// //eslint-disable
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddInterview from './pages/AddInterview';

function App() {
  return (
    <Router>
 <div class="bg-blue-50 text-gray-800">
  <nav class="bg-pink-600 text-white p-4 shadow-xl">
    <div class="flex justify-between items-center">
      <div class="text-lg font-semibold">Smart Interview Tracker</div>
      <div class="space-x-4">
        <Link to="/" className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 px-3 py-2 rounded">Dashboard</Link>
        <Link to="/add" className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 px-3 py-2 rounded">Add Interview</Link>
      </div>
    </div>
  </nav>
{/* </div> */}

        {/* Main Content */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddInterview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
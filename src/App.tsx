import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Users, Briefcase, FileText, DollarSign, List } from 'lucide-react';
import Personnel from './components/Personnel';
import Categories from './components/Categories';
import BankAccounts from './components/BankAccounts';
import Projects from './components/Projects';
import Contracts from './components/Contracts';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Top Navigation */}
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                    <Home size={20} />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/personnel" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                    <Users size={20} />
                    <span>Personnel</span>
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                    <List size={20} />
                    <span>Categories</span>
                  </Link>
                </li>
                <li>
                  <Link to="/bank-accounts" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                    <DollarSign size={20} />
                    <span>Bank Accounts</span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                    <Briefcase size={20} />
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contracts" className="flex items-center space-x-1 hover:bg-blue-700 px-3 py-2 rounded">
                    <FileText size={20} />
                    <span>Contracts</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<h2 className="text-2xl font-bold mb-4 text-blue-800">Welcome to the Dashboard</h2>} />
            <Route path="/personnel" element={<Personnel />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/bank-accounts" element={<BankAccounts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contracts" element={<Contracts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
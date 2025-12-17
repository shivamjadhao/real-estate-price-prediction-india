import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, DollarSign, Building2, Menu, X } from 'lucide-react';
import PricePredictor from './components/PricePredictor';
import MarketDashboard from './components/MarketDashboard';
import InvestmentAnalyzer from './components/InvestmentAnalyzer';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Predict Price', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Market Dashboard', path: '/market', icon: <BarChart2 className="w-4 h-4" /> },
    { name: 'Investment Analysis', path: '/investment', icon: <DollarSign className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-slate-900 tracking-tight">PropAI India</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                  location.pathname === item.path
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-6">
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                    Smart Real Estate Valuation
                  </h1>
                  <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                    AI-powered price predictions and market insights for India's top cities.
                  </p>
                </div>
                <PricePredictor />
              </div>
            } />
            <Route path="/market" element={<MarketDashboard />} />
            <Route path="/investment" element={<InvestmentAnalyzer />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-slate-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} PropAI India. All rights reserved.</p>
            <p className="mt-2">Disclaimer: Predictions are estimates based on market heuristics and mock models.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
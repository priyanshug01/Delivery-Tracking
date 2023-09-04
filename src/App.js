import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/account';
import Dashboard from './pages/dashboard';
import Location from './pages/location';
import Tracking from './pages/tracking';
import Masters from './pages/masters';
import Settings from './pages/settings';
import Details from './pages/details';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/location" element={<Location />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/vehicles" element={<Masters />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//https://colorswall.com/palette/7
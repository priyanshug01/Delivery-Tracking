import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/account';
import Dashboard from './pages/dashboard';
import Location from './pages/location';
import Vehicles from './pages/vehicles';
import Settings from './pages/settings';
import Details from './pages/details';
import NavBar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/location" element={<Location />} />
          {/* <Route path="/tracking" element={<Tracking />} /> */}
          <Route path="/vehicles" element={<Vehicles />} />
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
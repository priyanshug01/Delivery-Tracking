import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/account';
import Dashboard from './pages/dashboard';
import EntryField from './pages/entryfield';
import Survelliance from './pages/survelliance';
import Masters from './pages/masters';
import Settings from './pages/settings';
import Details from './pages/details';
import TransportEntry from './components/transportentry';
import DriverEntry from './components/driverentry';
import VehicleEntry from './components/vehicleentry';
import CityEntry from './components/cityentry';
import LoadtypeEntry from './components/loadtypeentry';
import ClientEntry from './components/cliententry';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/location" element={<EntryField />} />
          <Route path="/survelliance" element={<Survelliance />} />
          <Route path="/vehicles" element={<Masters />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/details" element={<Details />} />
          <Route path="/transportentry" element={<TransportEntry />} />
          <Route path="/driverentry" element={<DriverEntry />} />
          <Route path="/vehicleentry" element={<VehicleEntry />} />
          <Route path="/cityentry" element={<CityEntry />} />
          <Route path="/loadtypeentry" element={<LoadtypeEntry />} />
          <Route path="/cliententry" element={<ClientEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//https://colorswall.com/palette/7
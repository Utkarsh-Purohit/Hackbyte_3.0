import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import Reports from './pages/Reports';
import MentalHealth from './pages/MentalHealth';
import Medications from './pages/Medications';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
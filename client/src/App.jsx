import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import Reports from './pages/Reports';
import MentalHealth from './pages/MentalHealth';
import Medications from './pages/Medications';
import Settings from './pages/Settings';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Charts from './pages/Charts';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* ✅ Default Landing Page based on token */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/patient" replace /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/charts" element={<Charts />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* ✅ Default Landing Page based on token */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/patient" replace /> : <Navigate to="/login" replace />
          }
        />

        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

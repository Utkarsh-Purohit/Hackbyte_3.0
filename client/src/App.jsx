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

function ProtectedRoute({ element: Component, allowedRoles }) {
  console.log(Component);
  const userType = localStorage.getItem('userType'); // 'doctor' or 'patient'
  const token = localStorage.getItem('token');

  if (!token || !userType) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(userType)) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
}

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* Default Landing Page */}
        <Route
          path="/"
          element={
            token && userType === 'doctor' ? (
              <Navigate to="/doctor" replace />
            ) : token && userType === 'patient' ? (
              <Navigate to="/patient" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Patient Routes */}
        <Route path="/patient" element={<ProtectedRoute element={PatientDashboard} allowedRoles={['patient']} />} />
        <Route path="/mental-health" element={<ProtectedRoute element={MentalHealth} allowedRoles={['patient']} />} />
        <Route path="/medications" element={<ProtectedRoute element={Medications} allowedRoles={['patient']} />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<ProtectedRoute element={DoctorDashboard} allowedRoles={['doctor']} />} />
        <Route path="/reports" element={<ProtectedRoute element={Reports} allowedRoles={['doctor']} />} />

        {/* Shared Routes */}
        <Route path="/settings" element={<ProtectedRoute element={Settings} allowedRoles={['doctor', 'patient']} />} />
        <Route path="/charts" element={<ProtectedRoute element={Charts} allowedRoles={['doctor', 'patient']} />} />
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

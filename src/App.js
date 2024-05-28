// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Licenses from './pages/Licenses';
import LicenseDetails from './pages/LicenseDetails';
import ProcessGuide from './pages/ProcessGuide';
import Providers from './pages/Providers';
import ProviderDetails from './pages/ProviderDetails';
import RequestForm from './pages/RequestForm';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import LicenseManagement from './components/LicenseManagement'; // Import LicenseManagement
import { AuthProvider, useAuth } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();
  const navigate = useNavigate(); // Define navigate

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    navigate('/'); // Navigate to home if role doesn't match
    return null;
  }

  return children;
};

const AppContent = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Define navigate

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="App">
      <Header onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/licenses"
          element={
            <ProtectedRoute>
              <Licenses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/licenses/:id"
          element={
            <ProtectedRoute>
              <LicenseDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/process-guide"
          element={
            <ProtectedRoute>
              <ProcessGuide />
            </ProtectedRoute>
          }
        />
        <Route
          path="/providers"
          element={
            <ProtectedRoute>
              <Providers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/providers/:id"
          element={
            <ProtectedRoute>
              <ProviderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/request"
          element={
            <ProtectedRoute role="user">
              <RequestForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/license-management" // Add the route for LicenseManagement
          element={
            <ProtectedRoute role="admin">
              <LicenseManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <RequestProvider>
        <Router>
          <AppContent />
        </Router>
      </RequestProvider>
    </AuthProvider>
  );
}

export default App;

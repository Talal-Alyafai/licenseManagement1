import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = ({ onLogout }) => {
  const { user } = useAuth();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/licenses">Licenses</Link></li>
          <li><Link to="/process-guide">Process Guide</Link></li>
          <li><Link to="/providers">Providers</Link></li>
          {user && user.role === 'user' && <li><Link to="/request">Request Tool</Link></li>}
          {user && user.role === 'admin' && <li><Link to="/admin">Admin Dashboard</Link></li>}
          {/* Add the License Management link */}
          {user && user.role === 'admin' && <li><Link to="/license-management">License Management</Link></li>}
          {user ? (
            <li><button onClick={onLogout}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

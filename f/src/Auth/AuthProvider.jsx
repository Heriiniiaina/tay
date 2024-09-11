import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        setUser(sessionStorage.getItem(JSON.parse("user")));
        setIsAuthenticated(true);
        setRole(response.data.user.role);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials, userRole) => {
    try {
      const loginUrl = userRole === 'Admin' ? '/api/user/login' : '/api/patient/login';
      const response = await axios.post(loginUrl, credentials, { withCredentials: true });
      setUser(response.data.user);
      setIsAuthenticated(true);
      setRole(response.data.user.role);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const logoutUrl = role === 'Admin' ? '/api/user/admin/loggout' : '/api/patient/patient/loggout';
      await axios.get(logoutUrl, { withCredentials: true });
      setUser(null);
      setIsAuthenticated(false);
      setRole(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

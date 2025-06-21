import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setUser({}); // Optionally decode token for user info
    } else {
      setUser(null);
    }
  }, [token]);

  const login = async (usernameOrEmail, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { usernameOrEmail, password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser({});
      return { success: true };
    } catch (e) {
      return { success: false, message: e.response?.data || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, { username, email, password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser({});
      return { success: true };
    } catch (e) {
      return { success: false, message: e.response?.data || 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
} 
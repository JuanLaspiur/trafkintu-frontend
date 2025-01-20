import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const setterUser = (newUser) => {
    setUser(newUser);
  };

  const login = async (response) => {
    try {
      await AsyncStorage.setItem("token", response?.token);
      setToken(response?.token);
      setUser({username: response?.user, email:response?.email});
    } catch (error) {
      console.error("Error saving token: ", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error("Error removing token: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token, setterUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

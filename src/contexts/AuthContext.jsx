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
      await AsyncStorage.setItem("user", JSON.stringify(response)); // Guardamos el usuario como un string
      setToken(response?.token);
      setUser(response);
    } catch (error) {
      console.error("Error saving token: ", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user"); // Limpiamos también el user
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error("Error removing token: ", error);
    }
  };

  const setAuth = async () => {
    try {
      const savedToken = await AsyncStorage.getItem("token");
      const savedUser = await AsyncStorage.getItem("user");

      if (savedToken) {
        setToken(savedToken);
        alert(savedToken)
      }

      if (savedUser) {
        setUser(JSON.parse(savedUser)); 
      }
    } catch (error) {
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token, setterUser, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

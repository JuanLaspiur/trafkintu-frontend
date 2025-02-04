import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFollowedUsers,  getFollowers  } from "../services/follow.services.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]); 
  
  const setterUser = (newUser) => {
    setUser(newUser);
  };

  const fetchFollowData = async (userId) => {
    if (!userId) return;
    try {
      const followed = await getFollowedUsers(userId);
      const followersList = await getFollowers(userId);

      setFollowedUsers(followed || []);
      setFollowers(followersList || []);
    } catch (error) {
      console.error("Error fetching follow data:", error);
    }
  };

  const login = async (response) => {
    try {
      await AsyncStorage.setItem("token", response?.token);
      await AsyncStorage.setItem("user", JSON.stringify(response));
      setToken(response?.token);
      setUser(response);

    } catch (error) {
      console.error("Error saving token: ", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      setUser(null);
      setToken(null);
      setFollowers([]);
      setFollowedUsers([]);
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
      }
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error setting auth: ", error);
    }
  };

  useEffect(() => {
    setAuth();
  }, []);

  useEffect(()=>{
    if(user && user._id)
      fetchFollowData(user._id)
  },[user?._id])

  return (
    <AuthContext.Provider value={{ user, login, logout, token, setterUser, setAuth, followers, followedUsers, fetchFollowData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

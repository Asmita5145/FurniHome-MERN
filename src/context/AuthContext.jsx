import { createContext, useEffect, useState } from "react";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../api/userApi";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

 useEffect(() => {

    async function loadUser() {

      const token = localStorage.getItem("token");

      if (!token) return;

      try {

        const data = await getProfile(token);

        setUser(data.user);

      } catch (error) {

          console.error("Failed to load user:", error);

          localStorage.removeItem("token");

          setUser(null);

        }

    }

    loadUser();

  }, []);

  async function register(name, email, password) {

    try {

      const response = await registerUser({
        name,
        email,
        password,
      });

      return {
        success: true,
        message: response.message,
      };

    } catch (error) {

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration Failed",
      };

    }

  }

  async function login(email, password) {

    try {

      const response = await loginUser({
        email,
        password,
      });

      const { token, user } = response;

      localStorage.setItem("token", token);

      setUser(user);

      return {
        success: true,
        message: response.message,
      };

    } catch (error) {

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login Failed",
      };

    }

  }

  async function updateUserProfile(userData) {

    const token = localStorage.getItem("token");

    try {

      const response = await updateProfile(
        userData,
        token
      );

      setUser(response.user);

      return {
        success: true,
        message: response.message,
      };

    } catch (error) {

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Profile update failed",
      };

    }

  }

  function logout() {

    localStorage.removeItem("token");

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        updateUserProfile,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;
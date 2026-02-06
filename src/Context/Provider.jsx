import { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
 const [user, setUser] = useState(() => {
    try {
      const storedToken = localStorage.getItem("token");

      return storedToken ? JSON.parse(storedToken) : null;
    } catch (error) {
      console.error("Error parsing stored token:", error);
      return null;
    }
  });

  const [signedIn, setSignedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setSignedIn(true);
    localStorage.setItem("token" ,  JSON.stringify(userData))
  };

  const logout = () => {
    setUser(null);
    setSignedIn(false);
    localStorage.clear()
  };

        const isAuthenticated = localStorage.getItem("token");

  return (
    <Context.Provider value={{ user, signedIn, login, logout, isAuthenticated }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
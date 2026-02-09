import { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedData = localStorage.getItem("token");
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      return null;
    }
  });

  const [signedIn, setSignedIn] = useState(!!user);

  const login = (userData) => {
    setUser(userData);
    setSignedIn(true);
    localStorage.setItem("token", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setSignedIn(false);
    localStorage.clear();
  };

  return (
    <Context.Provider value={{ user, signedIn, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
import { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setSignedIn(true);
  };

  const logout = () => {
    setUser(null);
    setSignedIn(false);
  };

  return (
    <Context.Provider value={{ user, signedIn, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
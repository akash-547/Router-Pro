import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  //   on sign up user info in user state
  // set login states accordingly
  // show user info on sidebar, profile
  // add a logout button on side bar and add functionality

  return (
    <UserContext.Provider value={{ user, setUser, signedIn,   setSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
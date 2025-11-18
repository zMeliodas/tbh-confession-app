import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    username: "cedlemuel",
    image: "",
    link: "www.tbh.link/to/cedlemuel",
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <UserContext.Provider value={{ user, getInitials }}>
      {children}
    </UserContext.Provider>
  );
};

export const getUserInfo = () => useContext(UserContext);

export default UserProvider;

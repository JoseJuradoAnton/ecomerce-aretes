import React, { createContext, useState } from "react";
createContext;

const AuthContext = createContext(null);

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);

  function signUp() {}

  function login() {}

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

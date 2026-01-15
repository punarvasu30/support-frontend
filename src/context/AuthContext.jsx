import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  const login = (jwtToken) => {
    const payload = JSON.parse(atob(jwtToken.split(".")[1]));

    localStorage.setItem("token", jwtToken);
    localStorage.setItem("role", payload.role);

    setToken(jwtToken);
    setRole(payload.role);
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

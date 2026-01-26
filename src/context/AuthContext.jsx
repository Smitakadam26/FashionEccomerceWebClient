import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser.user);
    }
  }, []);
  
  const login = (userData) => {
    localStorage.setItem(
  "user",
  JSON.stringify({
    user: userData.user,
    token: userData.token,
  })
);
    setUser(userData.user);
  };

  const logout = () => {
    localStorage.removeItem("user");
     localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

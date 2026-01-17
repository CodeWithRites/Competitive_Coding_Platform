import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showStudentDetailsPopup, setShowStudentDetailsPopup] = useState(false);

  const login = (userData) => {
    setUser(userData);

    const completed = localStorage.getItem("studentProfileCompleted");
    if (completed !== "true") {
      setShowStudentDetailsPopup(true);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const closeStudentDetailsPopup = () => {
    setShowStudentDetailsPopup(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        showStudentDetailsPopup,
        closeStudentDetailsPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

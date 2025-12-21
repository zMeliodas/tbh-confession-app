import { useEffect, useState, createContext, useContext } from "react";
import { api } from "../services/authApi";
import CustomLoadingScreen from "../Components/common/CustomLoadingScreen";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyStoredToken = async () => {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const data = await api.verifyUserToken(storedToken);

        if (data.success) {
          setToken(storedToken);
          setUser(data.user);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Token verification failed: ", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    verifyStoredToken();
  }, []);

  const register = async (username, password) => {
    const data = await api.register(username, password);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  };

  const login = async (username, password) => {
    const data = await api.login(username, password);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  };

  const updateUser = (updates) => {
    setUser((prev) => {
      const updatedUser = { ...prev, ...updates };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  if (loading) {
    return <CustomLoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        login,
        register,
        updateUser,
        logout,
        isAuthenticated: !!token && !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
        const res = await axios.get(`${API_BASE_URL}/blog/all`);
        setBlogData(res.data.blogs);
      } catch (error) {
        console.log("error in all blogs api", error);
      }
    };
    allBlogs();
  }, []);
  

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const contextValue = { blogData, user, loginUser, logoutUser };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

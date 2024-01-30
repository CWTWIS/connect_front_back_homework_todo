import axios from "axios";
import React from "react";
import { useState, createContext, useEffect } from "react";

const AuthContext = createContext();
function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const [user, setUser] = useState({ code: "", password: "" });
  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        let token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const re = await axios.get("http://localhost:9999/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(re.data);
        setUser(re.data.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);
  //   return first then useEffect, only once

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContextProvider };
export default AuthContext;

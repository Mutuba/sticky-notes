import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { account } from "../appwrite/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        setUser(session);
      } catch (error) {
        setUser(null);
      }
    };
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, AuthContext };

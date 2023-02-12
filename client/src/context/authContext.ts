import { createContext, useContext } from 'react';

const AuthContext = createContext(null as any);

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, useAuth };
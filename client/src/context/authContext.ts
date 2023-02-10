import { createContext, useContext } from 'react';

export const AuthContext = createContext(null as any);

export const useAuth = () => {
  return useContext(AuthContext);
};

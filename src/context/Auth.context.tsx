import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import axios from 'axios';

import { BASE_URL } from '../utility/endpoints';

interface AuthProviderWrapperProps {
  children: React.ReactNode;
}

const AuthContext = createContext();

function AuthProviderWrapper({ children }: AuthProviderWrapperProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const storeToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = useCallback(() => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken && !currentUser) {
      axios
        .get(`${BASE_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setCurrentUser(user);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setCurrentUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setCurrentUser(null);
    }
  }, [currentUser]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const logOutUser = useCallback(() => {
    removeToken();
    authenticateUser();
  }, [removeToken, authenticateUser]);

  const authContextValue = useMemo(
    () => ({
      isLoggedIn,
      isLoading,
      currentUser,
      setCurrentUser,
      storeToken,
      authenticateUser,
      logOutUser,
    }),
    [
      isLoggedIn,
      isLoading,
      currentUser,
      setCurrentUser,
      storeToken,
      authenticateUser,
      logOutUser,
    ]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };

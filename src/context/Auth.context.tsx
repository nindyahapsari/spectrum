import React, { useState, createContext, useCallback, useMemo } from 'react';
import axios from 'axios';

import { BASE_URL } from '../utils/endpoints';

interface AuthProviderWrapperProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isLoggedIn: false,
  isLoading: true,
  currentUser: null,
});

function AuthProviderWrapper({ children }: AuthProviderWrapperProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const storeToken = useCallback((token: string) => {
    localStorage.setItem('authToken', token);
  }, []);

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

  const removeToken = useCallback(() => {
    localStorage.removeItem('authToken');
  }, []);

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

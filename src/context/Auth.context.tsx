import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
} from 'react';
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
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState({});

  const storeToken = useCallback((token: string) => {
    localStorage.setItem('authToken', token);
  }, []);

  const authenticateUser = useCallback(() => {
    const storedToken = localStorage.getItem('authToken');

    if (!storedToken) {
      setIsLoading(false);
    }

    if (storedToken) {
      axios
        .get(`${BASE_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);

          setCurrentUser(user);
        })
        .catch((error) => {
          setErrorMessages(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [currentUser]);

  const removeToken = useCallback(() => {
    localStorage.removeItem('authToken');
  }, []);

  const logOutUser = useCallback(() => {
    removeToken();
    authenticateUser();
  }, [removeToken, authenticateUser]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  const authContextValue = useMemo(
    () => ({
      isLoggedIn,
      isLoading,
      errorMessages,
      currentUser,
      storeToken,
      authenticateUser,
      logOutUser,
    }),
    [
      isLoggedIn,
      isLoading,
      errorMessages,
      currentUser,
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

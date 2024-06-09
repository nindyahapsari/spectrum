import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import axios from 'axios';

import { BASE_URL } from '../utils/endpoints';

interface CurrentUserProps {
  id?: string;
  username?: string;
  email?: string;
}
interface AuthProviderWrapperProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  currentUser: CurrentUserProps | null;
  errorMessages: string[];
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logOutUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  isLoading: true,
  currentUser: null,
  errorMessages: [],
  storeToken: () => {},
  authenticateUser: () => {},
  logOutUser: () => {},
});

function AuthProviderWrapper({ children }: AuthProviderWrapperProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<CurrentUserProps>({});

  const storeToken = useCallback((token: string) => {
    localStorage.setItem('authToken', token);
  }, []);

  const authenticateUser = useCallback(() => {
    const storedToken = localStorage.getItem('authToken');

    if (!storedToken) {
      setIsLoading(false);
    }

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
  }, []);

  const removeToken = useCallback(() => {
    localStorage.removeItem('authToken');
  }, []);

  const logOutUser = useCallback(() => {
    removeToken();
    setIsLoggedIn(false);
    setCurrentUser({});
  }, [removeToken]);

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

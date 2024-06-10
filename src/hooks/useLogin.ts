import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';
import { BASE_URL } from '../utils/endpoints';

type LoginUser = {
  email: string;
  password: string;
};

const useLogin = () => {
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const login = (data: LoginUser) => {
    const requestBody = {
      email: data.email,
      password: data.password,
    };

    return axios
      .post(`${BASE_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      });
  };

  return { login };
};

export default useLogin;

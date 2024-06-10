import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/endpoints';

type SignupUser = {
  email: string;
  password: string;
  name: string;
};

const useSignup = () => {
  const navigate = useNavigate();

  const signup = (data: SignupUser) => {
    const requestBody = {
      email: data.email,
      password: data.password,
      name: data.name,
    };

    return axios.post(`${BASE_URL}/auth/signup`, requestBody).then(() => {
      navigate('/login');
    });
  };

  return { signup };
};

export default useSignup;

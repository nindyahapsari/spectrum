import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';

import { BASE_URL } from '../utils/endpoints';

import { Card, Toast, Alert } from 'react-daisyui';
import MainButton from '../components/common/MainButton';
import FormInput from '../components/common/FormInput';

function LoginPage() {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  function handleUserLogin(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestBody = {
      email: loginUser.email,
      password: loginUser.password,
    };

    axios
      .post(`${BASE_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  function renderErrorToast() {
    if (errorMessage) {
      return (
        <Toast vertical="bottom" horizontal="end">
          <Alert status="error" className="bg-red-300 p-5 rounded-md">
            {errorMessage}
          </Alert>
        </Toast>
      );
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg text-center">
        <div className="text-2xl">Welcome back to Spectrum! </div>
        <div className="text-xl">Please login to continue </div>
      </div>
      <Card className="w-5/6 my-5">
        <Card.Body className="flex justify-center">
          <form className="flex flex-col w-1/3" onSubmit={handleLoginSubmit}>
            <FormInput
              label="Email"
              type="email"
              value={loginUser.email}
              name="email"
              onChange={handleUserLogin}
            />
            <FormInput
              label="Password"
              type="password"
              value={loginUser.password}
              name="password"
              onChange={handleUserLogin}
            />

            <MainButton
              customClass="flex items-center justify-center h-12 px-6 w-full bg-spectrum-primary mt-8 rounded font-semibold text-sm  hover:bg-spectrum-primary"
              type="submit"
              buttonText="Login"
            />
          </form>
        </Card.Body>
      </Card>
      <div className="my-5">
        <Link to="/signup">Dont have an account? Sign up</Link>
      </div>
      {renderErrorToast()}
    </div>
  );
}

export default LoginPage;

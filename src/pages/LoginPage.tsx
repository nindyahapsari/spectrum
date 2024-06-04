import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';

import { BASE_URL } from '../utils/endpoints';

import { Card } from 'react-daisyui';
import MainButton from '../components/common/MainButton';
import FormInput from '../components/common/FormInput';

function LoginPage() {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  function handleUserLogin(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name, e.target.value);
    setLoginUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginUser);
    const requestBody = {
      email: loginUser.email,
      password: loginUser.password,
    };

    axios.post(`${BASE_URL}/auth/login`, requestBody).then((response) => {
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/');
    });
  };

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
    </div>
  );
}

export default LoginPage;

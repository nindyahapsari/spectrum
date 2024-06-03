import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';

import { BASE_URL } from '../utils/endpoints';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${BASE_URL}/auth/login`, requestBody).then((response) => {
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/');
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg text-center">
        <div>Welcome back to Spectrum! </div>
        <div>Please login to continue </div>
      </div>
      <div className="w-60 my-5">
        <form className="flex flex-col" onSubmit={handleLoginSubmit}>
          <label className="font-semibold text-xs my-5">
            Email:
            <input
              className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </label>
          <label className="font-semibold text-xs my-5">
            Password:
            <input
              className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </label>
          <button
            className="flex items-center justify-center h-12 px-6 w-64 bg-spectrum-primary mt-8 rounded font-semibold text-sm  hover:bg-spectrum-primary"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="my-5">
          <Link to="/signup">Dont have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

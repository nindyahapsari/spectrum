import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../utils/endpoints';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
    axios
      .post(`${BASE_URL}/auth/signup`, requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-60 my-5">
        <form className="flex flex-col" onSubmit={handleSignupSubmit}>
          <label className="font-semibold text-xs my-5">
            Name:
            <input
              className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              value={name}
              onChange={handleName}
            />
          </label>
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
            Sign Up
          </button>
        </form>
        <div className="my-5">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

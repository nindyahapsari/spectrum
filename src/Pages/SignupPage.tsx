import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../utils/endpoints';

import { Input, Card } from 'react-daisyui';
import MainButton from '../components/common/MainButton';

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
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg text-center">
        <div className="text-2xl">Welcome back to Spectrum! </div>
        <div className="text-xl">Please signup to continue </div>
      </div>
      <Card className="w-5/6 my-5 mx-20">
        <Card.Body className="flex justify-center">
          <form className="flex flex-col w-1/3" onSubmit={handleSignupSubmit}>
            <label className="font-semibold text-xl my-5">
              Name:
              <Input
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="text"
                value={name}
                onChange={handleName}
              />
            </label>

            <label className="font-semibold text-xl my-5">
              Email:
              <Input
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="email"
                value={email}
                onChange={handleEmail}
              />
            </label>
            <label className="font-semibold text-xl my-5">
              Password:
              <Input
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </label>
            <MainButton
              customClass="flex items-center justify-center h-12 px-6 w-full bg-spectrum-primary mt-8 rounded font-semibold text-sm  hover:bg-spectrum-primary"
              type="submit"
              buttonText="Signup"
            />
          </form>
        </Card.Body>
      </Card>
      <div className="my-5">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;

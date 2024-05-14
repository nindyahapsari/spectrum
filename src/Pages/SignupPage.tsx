import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';

import { Card, Input, Button, Typography } from '@material-tailwind/react';

import { BASE_URL } from '../utility/endpoints';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

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
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <Card color="transparent" className="my-10" shadow={false}>
      <form
        onSubmit={handleSignupSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign Up
          </Typography>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            type="text"
            name="name"
            value={name}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            onChange={handleName}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            name="email"
            value={email}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            onChange={handleEmail}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            value={password}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            onChange={handlePassword}
          />
        </div>
        <div className="mb-4">
          <label>
            <input type="checkbox" />I agree to the Terms and Conditions
          </label>
        </div>
        <Button type="submit" className="mt-6 block">
          sign up
        </Button>
        {errorMessage && (
          <Typography color="red" className="mt-4 text-center font-normal">
            {errorMessage}
          </Typography>
        )}
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account? <Link to="/login"> Login</Link>
        </Typography>
      </form>
    </Card>
  );
}

export default SignupPage;

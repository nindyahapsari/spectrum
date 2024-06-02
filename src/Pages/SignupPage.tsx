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
    <div>
      <form onSubmit={handleSignupSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleName} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default SignupPage;

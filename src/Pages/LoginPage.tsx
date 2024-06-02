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
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Dont have an account? Sign up</Link>
    </div>
  );
}

export default LoginPage;

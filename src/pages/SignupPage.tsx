import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from '../utils/endpoints';

import { Card } from 'react-daisyui';
import MainButton from '../components/common/MainButton';
import FormInput from '../components/common/FormInput';

function SignupPage() {
  const [signupUser, setSignupUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate();

  function handleUserSignup(e: React.ChangeEvent<HTMLInputElement>) {
    setSignupUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestBody = {
      email: signupUser.email,
      password: signupUser.password,
      name: signupUser.name,
    };
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
            <FormInput
              label="Name"
              type="text"
              value={signupUser.name}
              name="name"
              onChange={(e) => handleUserSignup(e)}
            />
            <FormInput
              label="Email"
              type="email"
              value={signupUser.email}
              name="email"
              onChange={handleUserSignup}
            />
            <FormInput
              label="Password"
              type="password"
              value={signupUser.password}
              name="password"
              onChange={handleUserSignup}
            />

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

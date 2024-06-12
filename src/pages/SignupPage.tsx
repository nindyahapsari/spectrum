import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useSignup from '../hooks/useSignup';

interface SignupUser {
  email: string;
  password: string;
  name: string;
}

function SignupPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit } = useForm({
    defaultValues: { name: '', email: '', password: '' },
  });
  const { signup } = useSignup();

  const handleSignupSubmit = (data: SignupUser) => {
    signup(data).catch((error) => {
      setErrorMessage(error.message);
    });
  };

  function renderErrorToast() {
    if (errorMessage) {
      return (
        <div>
          <div className="bg-red-300 p-5 rounded-md">{errorMessage}</div>
        </div>
      );
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg text-center">
        <div className="text-2xl">Welcome back to Spectrum! </div>
        <div className="text-xl">Please signup to continue </div>
      </div>
      <div className="w-5/6 my-5 mx-20">
        <div className="flex justify-center">
          <form
            className="flex flex-col w-1/3"
            onSubmit={handleSubmit(handleSignupSubmit)}
          >
            <div className="flex flex-col justify-center items-start">
              <label className=" my-3" htmlFor="name">
                Email
              </label>
              <input
                className="w-full input input-bordered rounded-md flex items-center gap-2 "
                {...register('name')}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className=" my-3" htmlFor="email">
                Email
              </label>
              <input
                className="w-full input input-bordered rounded-md flex items-center gap-2 "
                {...register('email')}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className=" my-3" htmlFor="password">
                Email
              </label>
              <input
                type="password"
                className="w-full input input-bordered rounded-md flex items-center gap-2 "
                {...register('password')}
              />
            </div>

            <button
              className="flex items-center justify-center h-12 px-6 w-full bg-spectrum-primary mt-8 rounded font-semibold text-sm  hover:bg-spectrum-primary"
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
      <div className="my-5">
        <Link to="/login">Already have an account? Login</Link>
      </div>
      {renderErrorToast()}
    </div>
  );
}

export default SignupPage;

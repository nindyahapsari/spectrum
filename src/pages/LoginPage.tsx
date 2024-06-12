import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useLogin from '../hooks/useLogin';

interface LoginUser {
  email: string;
  password: string;
}

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
  });
  const { login } = useLogin();

  const handleLoginSubmit = (data: LoginUser) => {
    login(data).catch((error) => {
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
        <div className="text-xl">Please login to continue </div>
      </div>
      <div className="w-5/6 my-5">
        <div className="flex justify-center">
          <form
            className="flex flex-col w-1/3"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
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
                Password
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
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="my-5">
        <Link to="/signup">Dont have an account? Sign up</Link>
      </div>
      {renderErrorToast()}
    </div>
  );
}

export default LoginPage;

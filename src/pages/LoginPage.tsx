import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useLogin from '../hooks/useLogin';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputField from '../components/common/InputField';

interface LoginUser {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });
  const { login, isLoading } = useLogin();

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

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
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
              <InputField
                label="Email"
                name="email"
                register={register}
                error={errors.email?.message}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <InputField
                type="password"
                label="Password"
                name="password"
                register={register}
                error={errors.password?.message}
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

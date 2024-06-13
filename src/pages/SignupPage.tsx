import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useSignup from '../hooks/useSignup';
import InputField from '../components/common/InputField';

interface SignupUser {
  email: string;
  password: string;
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

function SignupPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(schema),
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
              <InputField
                label="Full Name"
                name="name"
                register={register}
                error={errors.name?.message}
              />
            </div>
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
                label="Password"
                name="password"
                type="password"
                register={register}
                error={errors.password?.message}
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

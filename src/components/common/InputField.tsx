import { UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T> {
  label: string;
  name: keyof T;
  register: UseFormRegister<T>;
  error: string | undefined;
}

function InputField<T>({ label, name, register, error }: InputFieldProps<T>) {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <label className="my-3" htmlFor={name}>
        {label}
      </label>
      <input
        className={`w-full input input-bordered rounded-md my-3 ${error ? 'border-red-500' : ''}`}
        {...register(name)}
      />
      {error && <p className="text-red-500">{`${label} is required`}</p>}
    </div>
  );
}

export default InputField;

import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  type?: string;
  label: string;
  name: keyof T;
  register: UseFormRegister<T>;
  error: string | undefined;
}

function InputField<T extends FieldValues>({
  type = 'text',
  label,
  name,
  register,
  error,
}: InputFieldProps<T>) {
  return (
    <div className="flex flex-col justify-center items-start w-full">
      <label className="my-3" htmlFor={String(name)}>
        {label}
      </label>
      <input
        type={type}
        className={`w-full input input-bordered rounded-md my-3 ${error ? 'border-red-500' : ''}`}
        {...register(name as Path<T>)}
      />
      {error && <p className="text-red-500">{`${label} is required`}</p>}
    </div>
  );
}

export default InputField;

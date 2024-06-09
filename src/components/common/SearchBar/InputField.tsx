import { UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../../../@types/formInput';

interface InputFieldProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FormInputs>;
  name: string;
  readOnly?: boolean;
  value?: string;
}

function InputField({
  label,
  placeholder,
  register,
  name,
  readOnly,
  value,
}: InputFieldProps) {
  return (
    <div className="mx-2">
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          className="form-input mt-1 block w-full h-10 border rounded px-4  bg-gray-50"
          placeholder={placeholder}
          {...register(name)}
          readOnly={readOnly}
          defaultValue={value}
        />
      </label>
    </div>
  );
}

export default InputField;
